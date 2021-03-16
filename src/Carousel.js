import React, { Component } from 'react'
import Api1 from './Api1'

export default class Carousel extends Component {

    render() {
        console.log(this.props)
        return (
            <div>                 
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">

                  <div className="carousel-item active">
                  <div style={{  
                    width: "100%",
                    height: "100vh",
                    display: "flex"}} >
                  <h2 style={{  margin: "auto"}}>#Slide nr.1</h2>
                  </div>
                  </div>


                  <div className="carousel-item">
                  <div style={{  
                    width: "100%",
                    height: "100vh",
                    display: "flex"}} >
                  <h2 style={{  margin: "auto"}}>#Slide nr.2</h2>
                  </div>
                  </div>
          
                  <div className="carousel-item">
                  <div style={{  
                    width: "100%",
                    height: "100vh",
                    display: "flex"}} >
                  <h2 style={{  margin: "auto"}}>#Slide nr.3</h2>
                  </div>
                  </div>
                </div>


                
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
        )
    }
}
