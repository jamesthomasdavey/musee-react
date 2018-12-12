// package
import React from 'react';
import { Fade } from 'react-slideshow-image';

import landing_0001_f from './img/landing_0001_f.jpg';
import landing_0002_f from './img/landing_0002_f.jpg';
import landing_0003_f from './img/landing_0003_f.jpg';
import landing_0004_f from './img/landing_0004_f.jpg';
import landing_0005_f from './img/landing_0005_f.jpg';
import landing_0006_f from './img/landing_0006_f.jpg';
import landing_0007_f from './img/landing_0007_f.jpg';
import landing_0008_f from './img/landing_0008_f.jpg';

// classes
import classes from './Slideshow.module.css';

const fadeImages = [
  landing_0001_f,
  landing_0002_f,
  landing_0003_f,
  landing_0004_f,
  landing_0005_f,
  landing_0006_f,
  landing_0007_f,
  landing_0008_f
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
};

const Slideshow = () => {
  const images = fadeImages.map((fadeImage, index) => {
    return (
      <div key={index} className={['each-fade', classes.eachFade].join(' ')}>
        <div
          style={{ backgroundImage: `url(${fadeImage})` }}
          className={['image-container', classes.imageContainer].join(' ')}
        />
        <h2>{`Slide ${index}`}</h2>
      </div>
    );
  });
  return (
    <div className={classes.wrapper}>
      <Fade {...fadeProperties}>{images}</Fade>
    </div>
  );
};

export default Slideshow;
