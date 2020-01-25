// package
import React from 'react';
import PropTypes from 'prop-types';

// component
import MenuItem from './components/MenuItem/MenuItem';

// css
import classes from './MenuItems.module.css';

const MenuItems = props => {
  return (
    <div className={classes.wrapper}>
      <MenuItem isInverted={props.isInverted} name="Visit" url="/visit" />
      <MenuItem isInverted={props.isInverted} name="Our Story" url="/story" />
      <MenuItem isInverted={props.isInverted} name="Gallery" url="/gallery" />
      <MenuItem isInverted={props.isInverted} name="Shop" url="/shop" />
      <MenuItem isInverted={props.isInverted} name="Facebook" url="http://www.facebook.com" />
    </div>
  );
};

MenuItems.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default MenuItems;
