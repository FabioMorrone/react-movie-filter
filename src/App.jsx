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
        <div class="mb-3">
          <label for="" class="form-label">Name</label>
          <input onChange={e => setGenre(e.target.value)}
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
            value={genre}
          />
          <small id="helpId" class="form-text text-muted">Help text</small>
        </div>

        <select name="movie" id="movie-select">
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


