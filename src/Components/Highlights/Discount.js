import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import classes from '../../resources/styles.module.css'
import MyButton from '../Utill/myButton';

class Discount extends Component {
    state={
       discountStart:0,
       discountEnd:30
   }
    
     getPorcentage= () => {  
  if(this.state.discountStart < this.state.discountEnd){
     this.setState({ 
            discountStart : this.state.discountStart + 1

     })

  }

     } 
    
    componentDidUpdate(){

        setTimeout(()=>{
           this.getPorcentage()

        },30)
    }
    
    render() {


        return (
           
          
           <div className={classes.center_wrapper}>
             <div className={classes.discount_wrapper}>
          <Fade  onReveal={()=> this.getPorcentage()}>
                <div className={classes.discount_porcentage}>
                    <span> {this.state.discountStart} </span>
                    <span> Off </span>
                </div>
           </Fade>

           <Slide right>


           
           <div  className={classes.discount_description}>
              <h3>Purchase tickets before 20th june</h3>
            <p>
            Learn how to configure a non-root public URL by running `npm run build`. You need to enable JavaScript to run this app. If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file.
</p>



            <MyButton
             text="Purchase tickets"
             bck="#ffa800"
             color="#ffffff"
             link="http://google.com"

            />
           </div>
           </Slide>
             </div>
          
          
          
          
           </div>


        );
    }
}

export default Discount;