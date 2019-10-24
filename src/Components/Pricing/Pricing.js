import React, { Component } from 'react';
import classes from '../../resources/styles.module.css';
import MyButton from '../Utill/myButton'
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
   
state={
    prices:[100,150,250],
    positions:['Balcony','medium','star'],
    desc:[
        'The reason you are also getting the hash file name, is because you are adding an additional inline file-loader. You are importing the image as',
         'Prefixing with file!, passes the file into the file-loader again, and this time it doesn',
         'Once you have the file-loader configured in the webpack.config, whenever you use import/require it tests the path against all loaders'

    ],
    linkto:['http://sales/b','http://sales/m','http://sales/s'],
    delay:[500,0,500]


}

 showboxes = () => (
this.state.prices.map((box,i)=>(
<Zoom delay={this.state.delay[i]} key={i}>
<div className={classes.pricing_item}>
  <div className={classes.pricing_inner_wrapper}>
     <div className={classes.pricing_title}>
        <span>${this.state.prices[i]}</span>
        <span>{this.state.positions[i]}</span>

     </div>
<div className={classes.pricing_description}>
      
{this.state.desc[i]}
</div>
<div className={classes.pricing_buttons}>
 <MyButton 
         text="Purchase"
         bck="#ffa800"
         color="#ffffff"
          link={this.state.linkto[i]}
 />


</div>


  </div>


</div>

</Zoom>
))


)   
    
    
    render() {

   
        const attachedclasses = [ classes.center_wrapper, classes.pricing_section]
        return (
            <div className={classes.bck_black}>
                <div className={attachedclasses.join(' ')}>
                  <h2> Pricing </h2>
                  
                  
                  <div className={classes.pricing_wrapper}>

                {this.showboxes()}
                  </div>

                </div>
                
            </div>
        
        )

    }
}

export default Pricing;