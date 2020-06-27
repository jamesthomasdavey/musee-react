// package
import React from 'react';
import { HashLink } from 'react-router-hash-link';

// component
// import Yelp from './components/Yelp/Yelp';

// css
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.wrapper}>
      <h3 className='sr-only'>Welcome</h3>
      <p className={classes.text}>
        <span className={classes.welcomeLine}>
          Welcome to the Musée Mécanique,
        </span>{' '}
        one of the world's largest privately owned collections of coin-operated
        mechanical musical instruments and antique arcade artifacts. You can
        play with any of our 300-plus machines in their original working
        condition.
      </p>

      <p className={classes.text}>
        We will take you on a journey from turn-of-the-century hand cranked
        music boxes to modern video arcade games. This is a trip down memory
        lane. It is a chance to show your children or grandchildren what you did
        for fun when you were their age. Before video games at home, perhaps
        before television, perhaps what you remember sitting in your
        grandparent's parlor.
      </p>

      <p className={classes.text}>
        For those of you who grew up in the San Francisco Bay Area, it is a
        chance to remember Playland at the Beach, Sutro Baths, and the Cliff
        House. There is our own "Laffing Sal", "Susie the Can-Can Dancer", and
        the fascinating "Carnival". Other things have been brought in from
        around the world for your amusement.
      </p>
      <p className={classes.text}>
        <strong>
          Due to the delicate nature of the machines, we do not allow private
          events or parties. At all times, food and drink are not allowed within
          the Musée.
        </strong>
      </p>
      <div role='presentation' className={classes.text}>
        <div
          role='region'
          aria-label='Information Links'
          className={classes.icons}
        >
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
      {/* <Yelp /> */}
    </div>
  );
};

export default About;
