import React from 'react';
import Featured from './Components/featured/Index'
import Header from './Components/header_footer/Header'
import  classes from './resources/styles.module.css'
import VenueNfo from './Components/venueNfo/index'
import Highlights from './Components/Highlights/Index'
import Pricing from './Components/Pricing/Pricing'
import Location from './Components/Location/Location'
import Footer from './Components/header_footer/Footer';
import { Element } from 'react-scroll';


function App() {
  return (
   
    <div className={classes.App} style={{height:"1500px"}}>
     
     
      <Header/>
      
      
      <Element name="featured">
      <Featured/>
      </Element>
      <Element name="venuenfo">

      <VenueNfo/>
      </Element>
      
      <Element name="highlights">

      <Highlights/>
      </Element>
      <Element name="pricing">
      <Pricing/>

</Element>
 <Element name="location">
      <Location/>
      
      </Element>
      

      <Footer/>
    </div>
  );
}

export default App;
