// package
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

// css
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  const blur = () => {
    document.body.focus();
  };
  let isActive;
  if (props.location.pathname.substring(0, props.url.length) === props.url) {
    isActive = true;
  }
  if (props.name === 'Facebook') {
    return (
      <a
        className={classes.wrapper}
        href={'https://www.facebook.com/museemecaniquesf/'}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={classes.textWrapper}>
          <span
            className={[
              classes.text,
              props.isInverted ? classes.inverted : '',
              isActive ? classes.active : '',
            ].join(' ')}
          >
            Facebook
          </span>
        </div>
      </a>
    );
  }
  return (
    <Link className={classes.wrapper} to={props.url} onClick={blur}>
      <div className={classes.textWrapper}>
        <span
          className={[
            classes.text,
            props.isInverted ? classes.inverted : '',
            isActive ? classes.active : '',
          ].join(' ')}
        >
          {props.name}
          {isActive && <span className='sr-only'>- current</span>}
        </span>
      </div>
    </Link>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isInverted: PropTypes.bool.isRequired,
};

export default withRouter(MenuItem);
