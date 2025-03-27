import { useEffect, useState } from 'react'
import moviesList from "./data/movies"


export default function App() {
  const [genre, setGenre] = useState('')
  const [filmFiltrati, setFilmFiltrati] = useState(moviesList)

  useEffect(() => {
    console.log('hello');

  }, [genre])




  return (
    <>

      <div className="container">
        {
          filmFiltrati.map((film) =>
            <div> {film.title}</div>
          )
        }
        <select
          className="movie"
          id="movie-select"
          value={genre}
          onChange={e => setGenre(e.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="">Fantascienza</option>
          <option value="">Thriller</option>
          <option value="">Romantico</option>
          <option value="">Azione</option>
          <option value="">Fantascienza</option>
          <option value="">Thriller</option>
        </select>
      </div>
    </>
  )
}


