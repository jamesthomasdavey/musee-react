// package
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// css
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <Link
      to="/"
      className={[
        classes.wrapper,
        props.isInverted ? classes.inverted : "",
        props.isScrolled ? classes.scrolled : "",
      ].join(" ")}
      onClick={props.closeNav}
    >
      <h1 role="none" className={classes.logo}>
        Musée Mécanique
      </h1>
      <span className={classes.slogan}>
        <em>Family owned and operated since 1933</em>
      </span>
    </Link>
  );
};

Logo.propTypes = {
  isInverted: PropTypes.bool.isRequired,
  isScrolled: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default Logo;
