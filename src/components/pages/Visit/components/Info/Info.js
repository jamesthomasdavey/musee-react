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
        <div className={classes.innerInfoHeader}>
          <h2 className={classes.infoHeaderLine}>Open 365 Days a Year</h2>
          <h2 className={classes.infoHeaderTagline}>Admission is Free</h2>
        </div>
      </div>
      <Address />
      <Hours />
    </div>
  );
};

export default Info;
