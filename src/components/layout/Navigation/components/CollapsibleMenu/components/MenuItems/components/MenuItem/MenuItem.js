// package
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// ext component
import { Link } from 'react-router-dom';

// css
import classes from './MenuItem.module.css';

const MenuItem = props => {
  return (
    <Link
      className={[
        classes.wrapper,
        props.isInverted ? classes.inverted : '',
        props.location.pathname === props.url ? classes.active : ''
      ].join(' ')}
      to={props.url}
    >
      <span className={classes.text}>{props.name}</span>
    </Link>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isInverted: PropTypes.bool.isRequired
};

export default withRouter(MenuItem);
