// package
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// ext component
import { Link } from "react-router-dom";

// css
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  const navLinkHandler = () => {
    document.activeElement.blur();
    props.closeNav();
  };
  let isActive;
  if (props.location.pathname.substring(0, props.url.length) === props.url) {
    isActive = true;
  }
  const tabHandler = (e) => {
    if (props.name === "Facebook") {
      if (e.key === "Tab" && !e.shiftKey) {
        props.closeNav();
      }
    }
  };
  if (props.name === "Facebook") {
    return (
      <a
        className={[
          classes.wrapper,
          props.isInverted ? classes.inverted : "",
          isActive ? classes.active : "",
        ].join(" ")}
        href="https://www.facebook.com/museemecaniquesf/"
        onKeyDown={tabHandler}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={classes.text}>{props.name}</span>
        {isActive && <span className="sr-only">- current</span>}
      </a>
    );
  }
  return (
    <Link
      className={[
        classes.wrapper,
        props.isInverted ? classes.inverted : "",
        isActive ? classes.active : "",
      ].join(" ")}
      to={props.url}
      onClick={navLinkHandler}
      onKeyDown={tabHandler}
    >
      <span className={classes.text}>{props.name}</span>
      {isActive && <span className="sr-only">- current</span>}
    </Link>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isInverted: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default withRouter(MenuItem);
