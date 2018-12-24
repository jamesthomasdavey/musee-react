// package
import React from 'react';
import PropTypes from 'prop-types';

// img
import stars_0_0 from './img/stars_0_0.png';
import stars_1_0 from './img/stars_1_0.png';
import stars_1_5 from './img/stars_1_5.png';
import stars_2_0 from './img/stars_2_0.png';
import stars_2_5 from './img/stars_2_5.png';
import stars_3_0 from './img/stars_3_0.png';
import stars_3_5 from './img/stars_3_5.png';
import stars_4_0 from './img/stars_4_0.png';
import stars_4_5 from './img/stars_4_5.png';
import stars_5_0 from './img/stars_5_0.png';

// css
import classes from './YelpStars.module.css';

const YelpStars = props => {
  let starsImageSrc;
  if (props.rating < 1) {
    starsImageSrc = stars_0_0;
  } else if (props.rating >= 1 && props.rating < 1.25) {
    starsImageSrc = stars_1_0;
  } else if (props.rating >= 1.25 && props.rating < 1.75) {
    starsImageSrc = stars_1_5;
  } else if (props.rating >= 1.75 && props.rating < 2.25) {
    starsImageSrc = stars_2_0;
  } else if (props.rating >= 2.25 && props.rating < 2.75) {
    starsImageSrc = stars_2_5;
  } else if (props.rating >= 2.75 && props.rating < 3.25) {
    starsImageSrc = stars_3_0;
  } else if (props.rating >= 3.25 && props.rating < 3.75) {
    starsImageSrc = stars_3_5;
  } else if (props.rating >= 3.75 && props.rating < 4.25) {
    starsImageSrc = stars_4_0;
  } else if (props.rating >= 4.25 && props.rating < 4.75) {
    starsImageSrc = stars_4_5;
  } else if (props.rating >= 4.75) {
    starsImageSrc = stars_5_0;
  }
  return (
    <div className={classes.wrapper}>
      <a
        href="https://www.yelp.com/biz/mus%C3%A9e-m%C3%A9canique-san-francisco-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class={classes.starsImage} alt={`${props.rating} Stars`} src={starsImageSrc} />
      </a>
    </div>
  );
};

YelpStars.propTypes = {
  rating: PropTypes.number.isRequired
};

export default YelpStars;
