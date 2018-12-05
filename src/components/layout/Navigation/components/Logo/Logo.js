// package
import React from 'react';
import { Link } from 'react-router-dom';

// css
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={classes.wrapper}>
      <h1 className={classes.logo}>Musée Mecaníque</h1>
    </Link>
  );
};

export default Logo;
