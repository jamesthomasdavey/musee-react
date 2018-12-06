// package
import React from 'react';
import PropTypes from 'prop-types';

// component
import MenuItems from './components/MenuItems/MenuItems';

// css
import classes from './Menu.module.css';

const Menu = props => {
  return (
    <div className={classes.wrapper}>
      <MenuItems isInverted={props.isInverted} />
    </div>
  );
};

Menu.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default Menu;
