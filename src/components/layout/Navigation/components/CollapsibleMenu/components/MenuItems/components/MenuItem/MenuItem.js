// package
import React from 'react';
import PropTypes from 'prop-types';

// ext component
import { Link } from 'react-router-dom';

// css
import classes from './MenuItem.module.css';

const MenuItem = props => {
  return (
    <Link className={classes.wrapper} to={props.url}>
      <span className={classes.text}>{props.name}</span>
    </Link>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default MenuItem;
