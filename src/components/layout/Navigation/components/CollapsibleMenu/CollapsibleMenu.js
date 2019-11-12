// package
import React from 'react';
import PropTypes from 'prop-types';

// ext component
import SmoothCollapse from 'react-smooth-collapse';

// component
import MenuItems from './components/MenuItems/MenuItems';

// css
import classes from './CollapsibleMenu.module.css';

const CollapsibleMenu = props => {
  return (
    <nav aria-labelledby="mobileNavigationButton" className={classes.wrapper}>
      <SmoothCollapse expanded={props.isExpanded}>
        <MenuItems closeNav={props.closeNav} isInverted={props.isInverted} />
      </SmoothCollapse>
    </nav>
  );
};

CollapsibleMenu.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  isInverted: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired
};

export default CollapsibleMenu;
