// package
import React from 'react';
import PropTypes from 'prop-types';

// component
import MenuItem from './components/MenuItem/MenuItem';

const MenuItems = props => {
  return (
    <div>
      <MenuItem isInverted={props.isInverted} name="Visit" url="/visit" />
      <MenuItem isInverted={props.isInverted} name="Our Story" url="/story" />
      <MenuItem isInverted={props.isInverted} name="Gallery" url="/gallery" />
      <MenuItem isInverted={props.isInverted} name="Shop" url="/shop" />
    </div>
  );
};

MenuItems.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default MenuItems;
