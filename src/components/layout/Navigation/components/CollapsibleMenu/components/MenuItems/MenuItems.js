// package
import React from "react";
import PropTypes from "prop-types";

// component
import MenuItem from "./components/MenuItem/MenuItem";

const MenuItems = (props) => {
  return (
    <div>
      <MenuItem
        isInverted={props.isInverted}
        closeNav={props.closeNav}
        name="Visit"
        url="/visit"
      />
      <MenuItem
        isInverted={props.isInverted}
        closeNav={props.closeNav}
        name="Our Story"
        url="/story"
      />
      <MenuItem
        isInverted={props.isInverted}
        closeNav={props.closeNav}
        name="Gallery"
        url="/gallery"
      />
      <MenuItem
        isInverted={props.isInverted}
        closeNav={props.closeNav}
        name="Shop"
        url="/shop"
      />
      <MenuItem
        isInverted={props.isInverted}
        closeNav={props.closeNav}
        name="Facebook"
        url="/facebook"
      />
    </div>
  );
};

MenuItems.propTypes = {
  isInverted: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default MenuItems;
