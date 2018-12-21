// package
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// css
import classes from './Hours.module.css';

const Hours = props => {
  return (
    <div className={[classes.wrapper, props.isInverted ? classes.inverted : ''].join(' ')}>
      <span className={classes.text}>Open Everyday</span>
      <span className={classes.text}>10AM - 8PM</span>
      <Link to="/contact" className={classes.contactLinkWrapper}>
        <div className={classes.contactLinkWrapperInner}>
          <span className={classes.contactLink} to="/contact">
            Contact Us
          </span>
        </div>
      </Link>
    </div>
  );
};

Hours.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default Hours;
