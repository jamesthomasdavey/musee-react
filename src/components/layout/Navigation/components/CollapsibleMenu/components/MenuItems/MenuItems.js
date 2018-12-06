// package
import React from 'react';
import PropTypes from 'prop-types';

// component
import MenuItem from './components/MenuItem/MenuItem';

const MenuItems = props => {
  return (
    <div>
      <MenuItem isInverted={props.isInverted} name="Welcome" url="/welcome" />
      <MenuItem isInverted={props.isInverted} name="Our History" url="/history" />
      <MenuItem isInverted={props.isInverted} name="Gallery" url="/gallery" />
      <MenuItem isInverted={props.isInverted} name="Shop" url="/shop" />
    </div>
  );
};

MenuItems.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default MenuItems;
