// package
import React from 'react';

// css
import classes from './Address.module.css';

const Address = () => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.addressLine}>Pier 45 at the end of Taylor Street</span>
      <span className={classes.addressLine}>Fisherman's Wharf</span>
      <span className={classes.addressLine}>San Francisco, CA 94133</span>
      <span className={classes.addressLine}>Tel: (415) 346-2000</span>
    </div>
  );
};

export default Address;
