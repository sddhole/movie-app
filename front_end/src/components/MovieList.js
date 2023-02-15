import React, { Component } from 'react'
import axios from 'axios'
import { movies } from '../movieData'

//const axios = require('axios');

let config = {
  method: 'get',
  url: 'localhost:8080',
  headers: { }
};




export class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {movieD: []};
  }
   getTrending()
   {
      alert("getTrendig called");
      axios.get("http://localhost:8080/")
      .then((response) => {
        this.setState({movieD: response.data.results})
        console.log((this.state.movieD));
      })

   }
//   componentDidMount() { 
//     axios.get("http://localhost:8080/")
// .then((response) => {
//   this.setState({movieD: response.data.results})
//   console.log((this.state.movieD));
// })
// .catch((error) => {
//   console.log(error);
// });
  //  }
  render() {
    
    return (
      <>
      <div >
         <h3 className='text-center' style={{ cursor: 'pointer'}} onClick={this.getTrending.bind(this)}><strong>Trending</strong></h3> 
      </div>
      <div className='movie-list'>
        <ul>
          {this.state.movieD.map((movie)=> <li><p>{movie.original_title}</p></li>)}
        </ul>
      </div>

      </>
      
    )
  }
}

export default MovieList