import React, { Component } from 'react';
import  classes from '../../resources/styles.module.css';
import Slide from 'react-reveal/Slide';

class Timeuntill extends Component {
   state={
         deadline:'Dec,16,2019',
         days:'0',
         hours:'0',
         minutes:'0',
         seconds:'0'
}

getTimeuntill(deadline){
     const time=Date.parse(deadline) - Date.parse(new Date())
     if(time<0){
         console.log('date passed bro')
     } else {

        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor(time/(1000*60*60*24));

      this.setState({
          days,
          hours,
          minutes,
          seconds
      })
     } 


}
   componentDidMount(){
       setInterval(() => this.getTimeuntill(this.state.deadline), 1000);

   }
   
   
   
   
    render() {
        return (

            <Slide left delay={1000}>

            
              <div className={classes.countdown_wrapper}>
             <div className={classes.countdown_top}>
                    Event starts in 
             </div>

             <div className={classes.countdown_bottom}>
                   <div className={classes.item}>
                  <div className={classes.countdown_time}>
                    {this.state.days}
                  </div>
                   <div className={classes.countdown_tag}>
                       days
                   </div>


                   </div>
                   <div className={classes.item}>
                  <div className={classes.countdown_time}>
                      {this.state.hours}
                  </div>
                   <div className={classes.countdown_tag}>
                       hs
                   </div>


                   </div>
                   <div className={classes.item}>
                  <div className={classes.countdown_time}>
                      {this.state.minutes}
                  </div>
                   <div className={classes.countdown_tag}>
                       min
                   </div>
                  

                   </div>
                   <div className={classes.item}>
                  <div className={classes.countdown_time}>
                      {this.state.seconds}
                  </div>
                   <div className={classes.countdown_tag}>
                       sec
                   </div>


                   </div>




             </div>








              </div>
                
              </Slide>
        );
    }
}
 
export default Timeuntill;