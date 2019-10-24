import React from 'react';
import Zoom from 'react-reveal/Zoom';
import classes from '../../resources/styles.module.css'
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VunueNfo = () => {
    
let attachedclasses = [classes.vn_icon_square,classes.bck_red]
let attachedclassess = [classes.vn_icon_square,classes.bck_yellow]
    return (
        <div className={classes.bck_black}>
            <div className={classes.center_wrapper}>
                <div className={classes.vn_wrapper}>

                    <Zoom duration={500}>
                        <div className={classes.vn_item}>
                            <div className={classes.vn_outer}>
                                <div className={classes.vn_inner}>
                                    <div className={attachedclasses.join(' ')}></div>
                                    <div 
                                        className={classes.vn_icon}
                                        style={{
                                            background:`url(${icon_calendar})`
                                        }}
                                    ></div>
                                    <div className={classes.vn_title}>
                                        Event Date & Time
                                    </div>
                                    <div className={classes.vn_desc}>
                                        7 August 2017 @10.00 pm
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                    
                    <Zoom duration={500} delay={500}>
                        <div className={classes.vn_item}>
                            <div className={classes.vn_outer}>
                                <div className={classes.vn_inner}>
                                    <div className={attachedclassess.join(' ')}></div>
                                    <div 
                                        className={classes.vn_icon}
                                        style={{
                                            background:`url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className={classes.vn_title}>
                                        Event Location
                                    </div>
                                    <div className={classes.vn_desc}>
                                        345 Speer Street Oakland, CA 9835
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    
                </div>
            </div>
        </div>
    );
};

export default VunueNfo;