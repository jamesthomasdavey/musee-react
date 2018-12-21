// package
import React from 'react';
import PropTypes from 'prop-types';

// css
import classes from './Address.module.css';

const Address = props => {
  return (
    <div className={[classes.wrapper, props.isInverted ? classes.inverted : ''].join(' ')}>
      <span className={classes.text}>Pier 45</span>
      <span className={classes.text}>Fisherman's Wharf</span>
      <span className={classes.text}>San Francisco, CA 94133</span>
    </div>
  );
};

Address.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default Address;
