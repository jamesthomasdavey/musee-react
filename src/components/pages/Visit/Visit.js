// package
import React, { Component } from 'react';

// component
import Map from './../../layout/Map/Map';
import About from './components/About/About';

// css
import classes from './Visit.module.css';

// img
import openCorner from './img/openCorner.svg';

class Visit extends Component {
  render() {
    document.title = 'Visit | Musée Mécanique';
    return (
      <div className={classes.wrapper}>
        <div className={classes.infoWrapper}>
          <div className="ui container">
            <div className={classes.infoHeaderWrapper}>
              <img alt="leftCorner" src={openCorner} className={classes.openLeftCorner} />
              <img alt="rightCorner" src={openCorner} className={classes.openRightCorner} />
              <h2 className={classes.infoOpenDays}>Open 365 Days a Year</h2>
              <h3 className={classes.infoCost}>Admission is Free!</h3>
            </div>
          </div>
          <div className={classes.mapAddressHoursWrapper}>
            <div className={classes.mapAddressHoursWrapperInner}>
              <div className={classes.map}>
                <Map />
              </div>
              <div className={classes.addressHoursWrapper}>
                <div className={classes.addressHoursWrapperInner}>
                  <div className={classes.addressWrapper}>
                    <div className={classes.addressHeaderWrapper}>
                      <h3 className={classes.addressHeader}>Visit</h3>
                    </div>
                    <div className={classes.addressContentWrapper}>
                      <span>Pier 45 at the end of Taylor Street</span>
                      <span>Fisherman's Wharf</span>
                      <span>San Francisco, CA 94133</span>
                      <span>Tel: (415) 346-2000</span>
                    </div>
                  </div>
                  <div className={classes.hoursWrapper}>
                    <div className={classes.hoursHeaderWrapper}>
                      <h3 className={classes.hoursHeader}>Hours</h3>
                    </div>
                    <div className={classes.hoursContentWrapper}>
                      <span>Mon-Fri: 10:00am - 8:00pm</span>
                      <span>Sat-Sun: 10:00am - 8:00pm</span>
                      <span>Holidays: 10:00am - 8:00pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottomWrapper}>
          <div className={classes.spacer} />
          <div className={classes.bottomWrapperInner}>
            <div className="ui text container">
              <div className={classes.aboutWrapper}>
                <About />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Visit;
