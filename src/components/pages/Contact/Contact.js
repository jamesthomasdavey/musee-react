// package
import React from 'react';

// component
import ContactForm from './components/ContactForm/ContactForm';
import Map from './../../layout/Map/Map';

// css
import classes from './Contact.module.css';

export default function Contact() {
  document.title = 'Contact Us | Musée Mécanique';
  return (
    <div className={classes.wrapper}>
      <div
        className={[
          'ui container',
          classes.topContainer,
          classes.oneHundred
        ].join(' ')}
      >
        <div className={classes.topWrapper}>
          <div className={classes.contactInfoWrapper}>
            <h2 className={classes.topHeader}>Contact Us</h2>
            <div className={classes.contactDetailWrapper}>
              <i aria-hidden="true" className="phone icon" />
              <span className={classes.contactDetail}>(415) 346-2000</span>
            </div>
            <div className={classes.contactInfoBlock}>
              <div className={classes.contactInfoHeader}>Address:</div>
              <div className={classes.contactInfoLine}>Pier 45</div>
              <div className={classes.contactInfoLine}>Fisherman's Wharf</div>
              <div className={classes.contactInfoLine}>
                San Francisco, CA 94133
              </div>
            </div>
            <div className={classes.contactInfoBlock}>
              <div className={classes.contactInfoHeader}>Hours:</div>
              <div className={classes.contactInfoLine}>
                Mon-Fri: 10:00am - 8:00pm
              </div>
              <div className={classes.contactInfoLine}>
                Sat-Sun: 10:00am - 8:00pm
              </div>
              <div className={classes.contactInfoLine}>
                Holidays: 10:00am - 8:00pm
              </div>
              <div
                className={classes.contactInfoLine}
                style={{ marginTop: '20px' }}
              >
                <p>
                  We will stay open later if the crowds demand it! Fun doesn't
                  sleep!
                </p>
              </div>
            </div>
            <div className={classes.contactInfoBlock}>
              <div className={classes.contactInfoHeader}>Private Parties:</div>
              <div className={classes.contactInfoLine}>
                <p>
                  We welcome groups of any size, but due to our wide appeal, we
                  do not close to the public during our posted hours.
                </p>
                <p>
                  We do not have any private rooms available and under no
                  circumstances do we allow any food or drink on the premises
                  due to the delicate nature of the machines.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.mapWrapper}>
            <Map />
          </div>
        </div>
      </div>
      <div className="ui container">
        <div className={['ui clearing divider', classes.divider].join(' ')} />
        <ContactForm />
      </div>
    </div>
  );
}
