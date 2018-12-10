// package
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// css
import classes from './Logo.module.css';

const Logo = props => {
  return (
    <Link to="/" className={[classes.wrapper, props.isInverted ? classes.inverted : ''].join(' ')}>
      <h1 className={classes.logo}>Musée Mécanique</h1>
      <span className={classes.slogan}>Fun for all ages!</span>
    </Link>
  );
};

Logo.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default Logo;
