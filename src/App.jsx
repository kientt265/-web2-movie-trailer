
import Banner from './components/Banner.jsx'
import Header from './components/Header.jsx'
import MovieList from './components/MovieList.jsx'
function App() {


  return (
    <>
      <div className='bg-black pb-10'>
        <Header/>
        <Banner/>
        <MovieList/>
      </div>
    </>
  )
}

export default App
