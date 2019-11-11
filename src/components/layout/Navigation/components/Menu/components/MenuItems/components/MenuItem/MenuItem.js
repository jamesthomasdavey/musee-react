// package
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

// css
import classes from './MenuItem.module.css';

const MenuItem = props => {
  let isActive;
  if (props.location.pathname.substring(0, props.url.length) === props.url) {
    isActive = true;
  }
  return (
    <Link className={classes.wrapper} to={props.url}>
      <div className={classes.textWrapper}>
        <span
          className={[
            classes.text,
            props.isInverted ? classes.inverted : '',
            isActive ? classes.active : ''
          ].join(' ')}
        >
          {props.name}
        </span>
      </div>
    </Link>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isInverted: PropTypes.bool.isRequired
};

export default withRouter(MenuItem);
