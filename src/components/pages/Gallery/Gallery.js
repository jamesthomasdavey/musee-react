// package
import React, { Component } from 'react';

// component
import GridGallery from './components/GridGallery/GridGallery';

// css
import classes from './Gallery.module.css';

class Gallery extends Component {
  render() {
    document.title = 'Gallery | Musée Mécanique';
    return (
      <div className={classes.wrapper}>
        <h2 className="sr-only">Gallery</h2>
        <div className={classes.mainImage}></div>
        <GridGallery />
      </div>
    );
  }
}

export default Gallery;
