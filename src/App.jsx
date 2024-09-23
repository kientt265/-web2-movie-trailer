import {useState, useEffect} from 'react'
import Banner from './components/Banner.jsx'
import Header from './components/Header.jsx'
import MovieList from './components/MovieList.jsx'
import { data } from 'autoprefixer'
function App() {

  const [movie, setMovie] = useState([])
  const [moviRate, setMovieRate] = useState([])
useEffect(() =>{
  const fechMovie = async() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    };
    const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1';
    const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const [res1, res2] = await Promise.all([
      fetch(url1, options),
      fetch(url2, options)
    ])
    const data1 = await res1.json()
    const data2 = await res2.json()
    setMovie(data1.results)
    setMovieRate(data2.results)
    // const response = await fetch(url, options)
    // const data = await response.json()
    // setMovie(data.results)
  }
  fechMovie()
}, [])

  return (
    <>
      <div className='bg-black pb-10'>
        <Header/>
        <Banner/>
        <MovieList title={"Phim Hot"} data ={movie}/>
        <MovieList title={"Phim Đề Cử"} data ={moviRate}/>
      </div>
    </>
  )
}

export default App
