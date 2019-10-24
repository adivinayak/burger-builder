 import React from 'react';
import classes from '../../resources/styles.module.css';
import Carrousel from './Carousel';
import Timeuntill from '../../Components/featured/Timeuntill'
const Featured = () => {
    return (


        <div style={{position: 'relative'}}>

        
           
               
           <Carrousel/>
            <div className={classes.artist_name}>
            
              <div className={classes.wrapper}>
               
                Ariana Grande

            </div>

            </div>

            <Timeuntill/>
        </div>
    );
};

export default Featured;