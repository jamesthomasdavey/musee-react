// package
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// css
import classes from './Logo.module.css';

const Logo = props => {
  return (
    <Link to="/" className={classes.wrapper}>
      <h1 className={[classes.logo, props.isInverted ? classes.inverted : ''].join(" ")}>Musée Mecaníque</h1>
    </Link>
  );
};

Logo.propTypes = {
  isInverted: PropTypes.bool.isRequired
}

export default Logo;
