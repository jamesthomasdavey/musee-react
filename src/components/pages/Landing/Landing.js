// package
import React, { Component, Fragment } from 'react';

// component
import Slideshow from './components/Slideshow/Slideshow';

// css
import classes from './Landing.module.css';

class Landing extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.innerWrapper}><Slideshow /></div>
      </div>
    );
  }
}

export default Landing;
