// Write your JS code here
import React from 'react'

import './index.css'

const Home = () => {
  
 return(
  <>
  
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Reopen Restaurants with <span>Technology!</span></h1>
       
        <p className="home-description">
        Unlock Your Restaurant With Digital Ordering !
        </p>
        <div class="button-container">
          <button type="button" className="shop-now-button">
            Take Free Demo
          </button>
          <button type="button" className="shop-now-button1">
            Read Our Story
          </button>
          </div>
          <img
          src="	https://tmbill.com/img/tmbill_all_in_one_restaurant_pos.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
    
      </div>

      <img
        src="	https://tmbill.com/img/tmbill_all_in_one_restaurant_pos.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
      <hr></hr>
    </div>
    
  </>
)}

export default Home
