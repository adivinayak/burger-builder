import React from 'react';
import Button from '@material-ui/core/Button';
import Ticketicon from '../../resources/images/icons/ticket.png';
import classes from '../../resources/styles.module.css';



const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="small"
            style={{
                 background: props.bck,
                 color: props.color
             }}        
        >
            <img src={Ticketicon}
                    className={classes.iconImage}
                    alt="icon_button"
             />
            {props.text}
        </Button>            
        
        )
};

export default MyButton;