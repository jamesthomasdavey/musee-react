// package
import React, { Component } from 'react';

// component
import Map from './components/Map/Map';
import Info from './components/Info/Info';
import About from './components/About/About';

// css
import classes from './Visit.module.css';

class Visit extends Component {
  render() {
    document.title = 'Visit | Musée Mécanique';
    return (
      <div className={classes.wrapper}>
        <div className={classes.containerOuterWrapper}>
          <div className="ui container">
            <div className={classes.containerInnerWrapper}>
              <div className={classes.map}>
                <Map />
              </div>
              <div className={classes.info}>
                <Info />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.spacer} />
        <div className={classes.containerOuterWrapper}>
          <div className="ui container">
            <div className={classes.bottomContainerInnerWrapper}>
              <About />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Visit;
