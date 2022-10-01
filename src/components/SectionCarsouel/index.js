import { red } from "@mui/material/colors";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";

class SliderDemo extends React.Component {
  render() {
    var settings = {
      dots: false,
    
    };
    return (
        <div className="container-block">
      <div className="container-slider">
        <Slider {...settings}>
          <div className="image-carsouel-conatiner">
            <h1 className="Happy-Clients">Happy Clients</h1>
            <img src="https://tmbill.com/img/happy-client/tmbill_doha_qatar.jpg" />
            <div className="container-discription">
                <p className="description">
                Thank you Rahil and team. Your software is very useful to us moreover your 24 hours team support. I am really recommend this software to others
                 to use and good price. Keep going on guys good luck.
                </p>
                <h4 className="heading-discription">
                <strong>Rejoice Thomas</strong>
                </h4>
                <h4 className="heading-discription">
                The Taste of India (M.D.)
                </h4>
                <h4 className="heading-discription">
                Auckland, New Zealand - 1042.
                </h4>
            </div>
          </div>
          <div className="image-carsouel-conatiner">
          <h1 className="Happy-Clients">Happy Clients</h1>
            <img src="https://tmbill.com/img/happy-client/tmbill_south_indian.jpg" />
            <div className="container-discription">
                <p className="description">
                Thank you Rahil and team. Your software is very useful to us moreover your 24 hours team support. I am really recommend this software to others
                 to use and good price. Keep going on guys good luck.
                </p>
                <h4 className="heading-discription">
                <strong>Rejoice Thomas</strong>
                </h4>
                <h4 className="heading-discription">
                The Taste of India (M.D.)
                </h4>
                <h4 className="heading-discription">
                Auckland, New Zealand - 1042.
                </h4>
            </div>
            
          </div>
          <div className="image-carsouel-conatiner">
          <h1 className="Happy-Clients">Happy Clients</h1>
            <img src="https://tmbill.com/img/happy-client/tmbill_funky_buddha.jpg" />
            <div className="container-discription">
                <p className="description">
                Thank you Rahil and team. Your software is very useful to us moreover your 24 hours team support. I am really recommend this software to others
                 to use and good price. Keep going on guys good luck.
                </p>
                <h4 className="heading-discription">
                <strong>Rejoice Thomas</strong>
                </h4>
                <h4 className="heading-discription">
                The Taste of India (M.D.)
                </h4>
                <h4 className="heading-discription">
                Auckland, New Zealand - 1042.
                </h4>
            </div>
          </div>
          <div className="image-carsouel-conatiner">
          <h1 className="Happy-Clients">Happy Clients</h1>
            <img src="https://tmbill.com/img/happy-client/tmbill_the_taste_of_india.jpg" />
            <div className="container-discription">
                <p className="description">
                Thank you Rahil and team. Your software is very useful to us moreover your 24 hours team support. I am really recommend this software to others
                 to use and good price. Keep going on guys good luck.
                </p>
                <h4 className="heading-discription">
                <strong>Rejoice Thomas</strong>
                </h4>
                <h4 className="heading-discription">
                The Taste of India (M.D.)
                </h4>
                <h4 className="heading-discription">
                Auckland, New Zealand - 1042.
                </h4>
            </div>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}
export default SliderDemo