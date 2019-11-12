// package
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// ext component
import { Link } from 'react-router-dom';

// css
import classes from './MenuItem.module.css';

const MenuItem = props => {
  let isActive;
  if (props.location.pathname.substring(0, props.url.length) === props.url) {
    isActive = true;
  }
  return (
    <Link
      className={[
        classes.wrapper,
        props.isInverted ? classes.inverted : '',
        isActive ? classes.active : ''
      ].join(' ')}
      to={props.url}
      onClick={props.closeNav}
    >
      <span className={classes.text}>{props.name}</span>
    </Link>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isInverted: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired
};

export default withRouter(MenuItem);
