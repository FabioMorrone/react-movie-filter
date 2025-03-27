import { useEffect, useState } from 'react'
import moviesList from "./data/movies"


export default function App() {

  const [movie, setMovie] = useState(moviesList)
  const [filteredMovie, setFilteredMovie] = useState(movie)

  useEffect(() => {
    console.log(movie);

  }, [])


  return (
    <>

      {
        moviesList.map((film) => <div> {film}</div>)
      }


    </>
  )
}


