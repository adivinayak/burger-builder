import React from 'react';
import Fade from 'react-reveal/Fade';
import classes from '../../resources/styles.module.css';
const Footer = () => {

    let attachedclasses=[classes.font_righteous , classes.footer_logo_venue]
    return (
        <footer className={classes.bck_red}>
            <Fade delay={500}>
                <div className={attachedclasses}>The Venue</div>
                <div className={classes.footer_copyright}>
                    The venue 2018.All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;