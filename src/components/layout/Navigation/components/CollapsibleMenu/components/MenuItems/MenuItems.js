// package
import React from 'react';

// component
import MenuItem from './components/MenuItem/MenuItem';

// css
import classes from './MenuItems.module.css';

const MenuItems = () => {
  return (
    <div className={classes.wrapper}>
      <MenuItem name="Welcome" url="/welcome" />
      <MenuItem name="Our History" url="/history" />
      <MenuItem name="Gallery" url="/gallery" />
      <MenuItem name="Shop" url="/shop" />
    </div>
  );
};

export default MenuItems;
