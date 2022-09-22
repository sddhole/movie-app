import React, { Component } from 'react'


import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <ul >
      
        <li> <Link to='/'> <h1 style={{marginLeft:'0.7rem', fontSize:'2.2rem',color: 'hotpink'}}>Movies</h1> </Link></li>
        <li><h3 style={{  marginTop :'0.7rem', color :'purple',fontSize:'2.8rem'}}> MovieFlex</h3></li>
        <li> <Link to='favourites'><h2 style={{ marginTop :'0.7rem',color: 'hotpink', marginRight:'0.7rem',fontSize:'2.2rem'}}>Favourites</h2></Link></li>
     </ul>
   
    )
  }
}

export default Navbar