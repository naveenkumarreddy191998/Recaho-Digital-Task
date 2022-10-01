// Write your JS code here
import React from 'react'

import './index.css'

const HomeSecond = () => {
  
 return(
  <>
    <div className="home-container">
    <img
        src="	https://tmbill.com/img/tmbill_restaurant_operating_system.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
      <div className="home-content">
      <img
          src="	https://tmbill.com/img/tmbill_restaurant_operating_system.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <div className="container-row">
        <h1 className="home-heading">Restaurant Operating System</h1>
       
        <p className="home-description">
        TMBill is a leading cloud-based end-to-end technology solutions for
         the Restaurants, Bars, Cafés,
         QSRs, Ice-cream Shops, Bakeries, and Cake Shops.
        </p>
        <p className="home-description">
        TMBill helps all types of food businesses, from a
         standalone food outlets to a large food chain, manage functions
          like billing, QR Code Ordering Platform, CRM, Customer Loyalty, Aggregators 
          integrations, Analytics, Inventory, Recipe, and Wastage Management, Centralized 
          Menu Management, Vendor Management and more. We have successfully registered a global presence, with more
         than 5000+ customers in over 350+ cities and 21+ countries.
        </p>
        
        <p className="home-description">
        We are the first company to provide a complete 
        online cloud POS solution for restaurants on Desktop and Mobile Devices.
        </p>

         <div className="row">
            <div className="col-md-6">
                <div className="shadow-lg--bgwhite p-2 rounded">
                    <h6 className="mb-2 p-1">Integration</h6>
                    <div className="d-flex flex-row">
                        <div className="bd-highlight p-1">
                            <img src="https://tmbill.com/img/integration/tmbill_swiggy_integration.png"alt=""/>
                        </div>
                        <div className="bd-highlight p-1">
                            <img src="	https://tmbill.com/img/integration/tmbill_zomato_integration.png"alt=""/>
                        </div>
                        <div className="bd-highlight p-1">
                            <img src="	https://tmbill.com/img/integration/tmbill_dunzo_integration.png"alt=""/>
                        </div>
                        <div className="bd-highlight p-1">
                            <img src="	https://tmbill.com/img/integration/tmbill_googlepay_integration.png"alt=""/>
                        </div>
                        <div className="bd-highlight p-1">
                            <img src="	https://tmbill.com/img/integration/tmbill_paytm_integration.png"alt=""/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-md-6">
            <div className="shadow-lg--bgwhite p-2 rounded">
            <h6 className="mb-2 p-1">Work on</h6>
            <div className="d-flex flex-row">
            <div className="bd-highlight p-1">
                            <img src="https://tmbill.com/img/integration/tmbill_works_on_android.png"alt=""/>
                        </div>
                        <div className="bd-highlight p-1">
                            <img src="https://tmbill.com/img/integration/tmbill_works_on_apple.png"alt=""/>
                        </div>
                        <div className="bd-highlight p-1">
                            <img src="	https://tmbill.com/img/integration/tmbill_works_on_windows.png"alt=""/>
                        </div>
            </div>

            </div>

            </div>
         </div>
    </div>
      </div>

      
      
    </div>
    
    
  </>
)}

export default HomeSecond
