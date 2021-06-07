// package
import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

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
        <h2 className='sr-only'>Visit</h2>
        <div className={classes.infoWrapper}>
          <div className='ui container'>
            <div className={classes.infoHeaderWrapper}>
              <img alt='' src={openCorner} className={classes.openLeftCorner} />
              <img
                alt=''
                src={openCorner}
                className={classes.openRightCorner}
              />
              <h3 className={classes.infoOpenDays}>
                Reopening on June 15th! 🎊
              </h3>
              <p className={classes.infoCost}>
                Once again, we will be open 365 days a year!
                <br />
                Admission is free!
              </p>
              <div className={classes.icons}>
                <HashLink to='/contact#send-a-message'>
                  <i aria-hidden='true' className='envelope outline icon' />
                  <span className='sr-only'>Send a message</span>
                </HashLink>
                <a
                  href='https://www.facebook.com/museemecaniquesf/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i aria-hidden='true' className='facebook icon' />
                  <span className='sr-only'>Facebook</span>
                </a>
                <a
                  href='https://www.instagram.com/explore/locations/117557/musee-mecanique/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i aria-hidden='true' className='instagram icon' />
                  <span className='sr-only'>Instagram</span>
                </a>
                <a
                  href='https://www.google.com/search?rlz=1C5CHFA_enUS725US725&ei=1hggXJqACMz0rAGnsY_QBQ&q=Mus%C3%A9e+M%C3%A9canique&oq=Mus%C3%A9e+M%C3%A9canique&gs_l=psy-ab.3..35i39l2j0j0i67j0l2j0i22i30l4.36489.43079..44589...4.0..0.319.3455.1j14j5j1....2..0....1..gws-wiz.......38j0i71j0i131i67j0i131j0i22i10i30.s3CJM2eXixM#lrd=0x808580e254330009:0xed9aa8b90062eab8,1,,,'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i aria-hidden='true' className='google icon' />
                  <span className='sr-only'>Google</span>
                </a>
                <a
                  href='https://www.yelp.com/biz/mus%C3%A9e-m%C3%A9canique-san-francisco-4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i aria-hidden='true' className='yelp icon' />
                  <span className='sr-only'>Yelp</span>
                </a>
              </div>
            </div>
          </div>
          <div className={classes.mapAddressHoursWrapper}>
            <div className={classes.mapAddressHoursWrapperInner}>
              <div className={classes.map}>
                <h3 className='sr-only'>Map</h3>
                <Map />
              </div>
              <div className={classes.addressHoursWrapper}>
                <div className={classes.addressHoursWrapperInner}>
                  <div className={classes.addressWrapper}>
                    <div className={classes.addressHeaderWrapper}>
                      <h3 className={classes.addressHeader}>Visit</h3>
                    </div>
                    <address className={classes.addressContentWrapper}>
                      <span>Pier 45 at the end of Taylor Street</span>
                      <span>Fisherman's Wharf</span>
                      <span>San Francisco, CA 94133</span>
                      <span>Tel: (415) 346-2000</span>
                    </address>
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
            <div className='ui text container'>
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
