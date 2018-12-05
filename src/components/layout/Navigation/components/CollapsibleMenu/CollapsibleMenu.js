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
    <div className={classes.wrapper}>
      <SmoothCollapse expanded={props.isExpanded}>
        <MenuItems />
      </SmoothCollapse>
    </div>
  );
};

CollapsibleMenu.propTypes = {
  isExpanded: PropTypes.bool.isRequired
};

export default CollapsibleMenu;
