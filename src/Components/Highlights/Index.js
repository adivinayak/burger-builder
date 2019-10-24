import React from 'react';
import classes from '../../resources/styles.module.css';
import Description from '../Highlights/Description';
 import Discount from '../Highlights/Discount';
const Highlights = () => {
    return (
        <div className={classes.highlight_wrapper }>
             <Description/>
             <Discount/>
        </div>
    );
};

export default Highlights; 