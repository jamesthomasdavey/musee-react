// package
import React, { Component } from 'react';

// component
import GridGallery from './components/GridGallery/GridGallery';

// css
import classes from './Gallery.module.css';

class Gallery extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <GridGallery />
      </div>
    );
  }
}

export default Gallery;
