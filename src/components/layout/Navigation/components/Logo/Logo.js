// package
import React from 'react';

// css
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.logo}>Musée Mecaníque</h1>
    </div>
  );
};

export default Logo;
