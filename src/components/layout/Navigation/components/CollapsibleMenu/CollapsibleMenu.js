// package
import React from 'react';
import PropTypes from 'prop-types';

// ext component
import SmoothCollapse from 'react-smooth-collapse';

// css
import classes from './CollapsibleMenu.module.css';

const CollapsibleMenu = props => {
  return (
    <div className={classes.wrapper}>
      <div className="ui container">
        <SmoothCollapse expanded={props.isExpanded}>Menu Items</SmoothCollapse>
      </div>
    </div>
  );
};

CollapsibleMenu.propTypes = {
  isExpanded: PropTypes.bool.isRequired
};

export default CollapsibleMenu;
