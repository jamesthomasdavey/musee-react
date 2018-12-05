// package
import React from 'react';
import PropTypes from 'prop-types';

// css
import classes from './ToggleButton.module.css';

const ToggleButton = props => {
  return (
    <div className={classes.wrapper}>
      <button onClick={props.toggleCollapsibleMenuHandler}>Toggler</button>
    </div>
  );
};

ToggleButton.propTypes = {
  toggleCollapsibleMenuHandler: PropTypes.func.isRequired
};

export default ToggleButton;
