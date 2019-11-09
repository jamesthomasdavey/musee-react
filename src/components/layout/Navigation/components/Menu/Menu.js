// package
import React from 'react';
import PropTypes from 'prop-types';

// component
import MenuItems from './components/MenuItems/MenuItems';

// css
import classes from './Menu.module.css';

const Menu = props => {
  return (
    <nav aria-label="Main" className={classes.wrapper}>
      <MenuItems isInverted={props.isInverted} />
    </nav>
  );
};

Menu.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default Menu;
