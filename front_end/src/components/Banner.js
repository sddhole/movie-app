import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
        <div className="card banner-card" >
        <img src="https://www.filmibeat.com/ph-big/2022/06/brahmastra_165527163900.jpg" className="card-img-top banner-img"></img>
        
          <h5 className="card-title banner-title">Bramhastra</h5>
          <p className="card-text banner-text">coming soon.</p>
          
        
      </div>
    )
  }
}

export default Banner