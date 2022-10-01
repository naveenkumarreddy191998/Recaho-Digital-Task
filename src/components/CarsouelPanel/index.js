import React, { Component } from "react";
import Slider from "react-slick";
import './index.css';


 class AutoPlayPanel extends Component {
  
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow:6,
      slidesToScroll: 6,
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
            <h1 className="Heading">Our Partners</h1>
          </div>
        <Slider {...settings}>
          
        <div className="Slides">
            <img src="	https://tmbill.com/img/Partners/tmbill-deliveroo.jpg" />
          </div>
          <div className="Slides">
            <img src="	https://tmbill.com/img/Partners/tmbill-ubereats.jpg" />
          </div>
          <div className="Slides">
            <img src="https://tmbill.com/img/Partners/tmbill-Just-eat.jpg" />
          </div>
          <div className="Slides">
            <img src="https://tmbill.com/img/clients/tmbill_powered_by_swadist.jpg" />
          </div>
          <div className="Slides">
            <img src="https://tmbill.com/img/Partners/tmbill-upsale.jpg" />
          </div>
          <div className="Slides">
            <img src="https://tmbill.com/img/Partners/tmbill-payu.jpg" />
          </div>
          <div className="Slides">
            <img src="https://tmbill.com/img/Partners/tmbill-swiggy.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default AutoPlayPanel;
