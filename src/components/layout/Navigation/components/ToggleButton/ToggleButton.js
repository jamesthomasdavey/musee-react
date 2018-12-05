// package
import React from 'react';
import PropTypes from 'prop-types';

// css
import classes from './ToggleButton.module.css';

const ToggleButton = props => {
  return (
    <button
      className={[classes.wrapper, props.collapsibleMenuIsExpanded ? classes.expanded : ''].join(
        ' '
      )}
      onClick={props.toggleCollapsibleMenuHandler}
    >
      <span className={classes.bar} />
      <span className={classes.bar} />
      <span className={classes.bar} />
    </button>
  );
};

ToggleButton.propTypes = {
  collapsibleMenuIsExpanded: PropTypes.bool.isRequired,
  toggleCollapsibleMenuHandler: PropTypes.func.isRequired
};

export default ToggleButton;
