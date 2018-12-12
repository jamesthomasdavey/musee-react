// package
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';

// css
import classes from './Slideshow.module.css';

class Slideshow extends Component {
  render() {
    const slideImages = this.props.images.map(slideImage => {
      return (
        <div key={slideImage} className={['each-slide', classes.imageWrapper].join(' ')}>
          <div className={classes.image} style={{ background: `url(${slideImage})` }} />
        </div>
      );
    });

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: this.props.images.length > 1,
      arrows: this.props.images.length > 1,
      autoplay: false
    };

    return (
      <div className={classes.wrapper}>
        <div className={classes.innerWrapper}>
          <Slide {...properties}>{slideImages}</Slide>
        </div>
      </div>
    );
  }
}

Slideshow.propTypes = {
  images: PropTypes.array.isRequired
};

export default Slideshow;
