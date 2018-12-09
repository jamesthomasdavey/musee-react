// package
import React from 'react';

// css
import classes from './Hours.module.css';

const Hours = () => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.hoursHeader}>Minumum Hours:</h3>
      <span className={classes.hoursLine}>
        (We will stay open later if the crowds demand it. Fun Doesn't Sleep!)
      </span>
      <span className={classes.hoursLine}>Mon-Fri 10:00am-8:00pm</span>
      <span className={classes.hoursLine}>Sat-Sun 10:00am-8:00pm</span>
      <span className={classes.hoursLine}>Holidays 10:00am-8:00pm</span>
    </div>
  );
};

export default Hours;
