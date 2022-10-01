import React from 'react'

import NavbarSection from './components/Navbar'
import Home from './components/Home'
import HomeSecond from './components/Homesecond';
import SectionField from './components/SectionField';
import AutoPlay from './components/CarsouelSlides';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import SectionPart from './components/SectionPart';
import AutoPlayPanel from './components/CarsouelPanel';
import "slick-carousel/slick/slick-theme.css";
import AutoGrid from './components/SectionOutlet';
import SliderDemo from './components/SectionCarsouel';

import Test from './components/Form';

 const App=()=>{
  return (
    <>
  <NavbarSection/>
  <Home/>
  <HomeSecond/>
  <SectionField/>
  <AutoPlay/>
  <SectionPart/>
  <AutoPlayPanel/>
  <AutoGrid/>
  <SliderDemo/>
  <Test/>
    </>
  );
}
export default App;