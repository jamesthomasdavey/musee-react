// package
import React, { Component } from 'react';

// component
import Map from './components/Map/Map';
import Info from './components/Info/Info';

// css
import classes from './Visit.module.css';

class Visit extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div className="ui container">
          <div className={classes.innerWrapper}>
            <div className={classes.map}>
              <Map />
            </div>
            <div className={classes.info}>
              <Info />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Visit;
