
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';
import classes from  '../../resources/styles.module.css'


class Header extends Component {
state={ 
    draweropen: false,
    headershow: false
}
componentDidMount(){

    window.addEventListener('scroll', this.handleScroll);
}
handleScroll = () =>{
if(window.scrollY > 0){
 this.setState({headershow: true})

} else {
    this.setState({
        headershow: false
    })
}

}


toggledrawer = (value) => {

  this.setState({ 
      
    draweropen: value

})

}



    render() {



       
        return (
        <AppBar
        position="fixed"
        style={{

         backgroundColor:this.state.headershow ? '#2f2f2f' : 'transparent',
         boxShadow:'none',
         padding:'10px 0px'

        }}
        >

        <Toolbar>
              <div className={classes.header_logo}>
                  <div className={classes.header_logo_venue}> The Venue</div>
                  <div className={classes.header_logo_title}>Musical Events</div>

              </div>
         <IconButton
         aria-label="Menu"
         color="inherit"
         onClick={()=> {this.toggledrawer(true)}}
         
         >
       
        <MenuIcon/>

         </IconButton>

         <SideDrawer
              open={this.state.draweropen}
              onClose={(value) => this.toggledrawer(value)}
  />

        </Toolbar>

    

        </AppBar>
        );
    }
}

export default Header;