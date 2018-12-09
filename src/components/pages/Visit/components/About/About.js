// package
import React from 'react';

// css
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>
        <span className={classes.welcomeLine}>Welcome to the Musée Mécanique,</span> one of the
        world's largest privately owned collections of coin-operated mechanical musical instruments
        and antique arcade artifacts. You can play with any of our 300-plus machines in their
        original working condition.
      </p>

      <p className={classes.text}>
        We will take you on a journey from turn-of-the-century hand cranked music boxes to modern
        video arcade games. This is a trip down memory lane. It is a chance to show your children or
        grandchildren what you did for fun when you were their age. Before video games at home,
        perhaps before television, perhaps what you remember sitting in your grandparent's parlor.
      </p>

      <p className={classes.text}>
        For those of you who grew up in the San Francisco Bay Area, it is a chance to remember
        Playland at the Beach, Sutro Baths, and the Cliff House. There is our own "Laffing Sal",
        "Susie the Can-Can Dancer", and the fascinating "Carnival". Other things have been brought
        in from around the world for your amusement.
      </p>
    </div>
  );
};

export default About;
