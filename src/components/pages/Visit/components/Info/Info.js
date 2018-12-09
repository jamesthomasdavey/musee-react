// package
import React from 'react';

// component
import Address from './components/Address/Address';
import Hours from './components/Hours/Hours';

// css
import classes from './Info.module.css';

const Info = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.infoHeader}>
        <h2 className={classes.infoHeaderLine}>We're open 365 days a year</h2>
        <h2 className={classes.infoHeaderLine}>Admission is Free</h2>
      </div>
      <Address />
      <Hours />
    </div>
  );
};

export default Info;
