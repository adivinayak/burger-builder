import React from 'react';
import  '../../resources/styles.module.css';
import Slider from 'react-slick';
import slide_one from '../../images/slide_one.jpg'
import slide_two from '../../images/slide_two.jpg'
import slide_three from '../../images/slide_three.jpg'
import classes from '../../resources/styles.module.css'


const Carrousel = () => {


    const settings = {

         dots:false,
         infinite:true,
         autoplay:true,
         speed:900

    }
    
    
    return (
        <div 
        className={classes.carrousel_wrapper}
        style={{
               height : `${window.innerHeight}px`,
               
               overflow: 'hidden'


        }}
        
        >
        <Slider {...settings}>
       <div >
           <div className={classes.carrousel_image}
          style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
           ></div>
       </div>

       <div>
       <div 
          className={classes.carrousel_image}
          style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
           >
            

           </div>
       </div>

       <div>
       <div 
          
          className={classes.carrousel_image}
          style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
           >
            

           </div>
       </div>






        </Slider>
        
            
        </div>
 


 
 
 
 );
};

export default Carrousel;