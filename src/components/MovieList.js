import React, { Component } from 'react'
import { movies } from '../movieData'

export class MovieList extends Component {
  render() {
    let movieD= movies.results;
    return (
      <>
      <div >
         <h3 className='text-center'><strong>Trending</strong></h3> 
      </div>
      <div className='movie-list'>
        <ul>
          {movieD.map((movie)=> <li><p>{movie.original_title}</p></li>)}
        </ul>
      </div>

      </>
      
    )
  }
}

export default MovieList