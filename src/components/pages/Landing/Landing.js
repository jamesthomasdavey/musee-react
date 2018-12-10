// package
import React, { Component } from 'react';

// css
import classes from './Landing.module.css';

class Landing extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.innerWrapper}>
          <ul className={classes.slideshow}>
            <li>
              <span>Image 01</span>
            </li>
            <li>
              <span>Image 02</span>
            </li>
            <li>
              <span>Image 03</span>
            </li>
            <li>
              <span>Image 04</span>
            </li>
            <li>
              <span>Image 05</span>
            </li>
            <li>
              <span>Image 06</span>
            </li>
            <li>
              <span>Image 07</span>
            </li>
            <li>
              <span>Image 08</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Landing;
