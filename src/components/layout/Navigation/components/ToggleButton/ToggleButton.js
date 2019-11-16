// package
import React from 'react';
import PropTypes from 'prop-types';

// css
import classes from './ToggleButton.module.css';

const ToggleButton = props => {
  const clickHandler = e => {
    e.preventDefault();
    props.toggleCollapsibleMenuHandler();
  };
  const spacebarHandler = e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      e.target.click();
    }
  };
  return (
    // eslint-disable-next-line
    <a
      className={[
        classes.wrapper,
        props.collapsibleMenuIsExpanded ? classes.expanded : '',
        props.isInverted ? classes.inverted : ''
      ].join(' ')}
      onClick={clickHandler}
      onKeyDown={spacebarHandler}
      aria-expanded={props.collapsibleMenuIsExpanded ? 'true' : 'false'}
      aria-label="Mobile Navigation"
      href="#"
      role="button"
      id="mobileNavigationButton"
    >
      <span aria-hidden="true" className={classes.bar} />
      <span aria-hidden="true" className={classes.bar} />
      <span aria-hidden="true" className={classes.bar} />
    </a>
  );
};

ToggleButton.propTypes = {
  collapsibleMenuIsExpanded: PropTypes.bool.isRequired,
  toggleCollapsibleMenuHandler: PropTypes.func.isRequired,
  isInverted: PropTypes.bool.isRequired
};

export default ToggleButton;
