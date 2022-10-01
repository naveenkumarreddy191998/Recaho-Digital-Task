import React, { Component } from "react";
import Slider from "react-slick";
import './index.css';


 class AutoPlay extends Component {
  
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow:6,
      slidesToScroll: 3,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
      
    };
    return (
      <div className="slick-caurosel col-lg-12 col-md-12 col-sm-12 w-70%">
        <div>
            <h1 className="Heading">Our Clients</h1>
          </div>
        <Slider {...settings}>
          
          <div className="slides">
            <img src="	https://tmbill.com/img/clients/tmbill_powered_by_cheesy_chunks.jpg" />
          </div>
          <div className="slides">
            <img src="https://tmbill.com/img/clients/tmbill_powered_by_pokketcafe.jpg" />
          </div>
          <div className="slides">
            <img src="https://tmbill.com/img/clients/tmbill_powered_by_jal-ejal.jpg" />
          </div>
          <div className="slides">
            <img src="https://tmbill.com/img/clients/tmbill_powered_by_swadist.jpg" />
          </div>
          <div className="slides">
            <img src="	https://tmbill.com/img/clients/tmbill_powered_by_bombaykulfi.jpg" />
          </div>
          <div className="slides">
            <img src="https://tmbill.com/img/clients/tmbill_powered_by_chanderlok.jpg" />
          </div>
          <div className="slides">
            <img src="	https://tmbill.com/img/clients/tmbill_powered_by_sagar_ratna.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default AutoPlay;
