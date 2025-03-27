import { useEffect, useState } from 'react'
import moviesList from "./data/movies"


export default function App() {
  const [genre, setGenre] = useState('')






  return (
    <>
      <div className='container'>

        {
          moviesList.map((film) =>
            <div> {film.title}</div>
          )
        }




        <select
          name="movie"
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


