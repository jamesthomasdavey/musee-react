// package
import React from 'react';
import PropTypes from 'prop-types';

// css
import classes from './Hours.module.css';

const Hours = props => {
  return (
    <div className={[classes.wrapper, props.isInverted ? classes.inverted : ''].join(' ')}>
      <span className={classes.text}>Open Everyday</span>
      <span className={classes.text}>10AM - 10PM</span>
    </div>
  );
};

Hours.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default Hours;
