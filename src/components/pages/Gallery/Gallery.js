// package
import React, { Component } from 'react';

// component
import GridGallery from './components/GridGallery/GridGallery';
// import galleryBackground from './img/galleryBackground.jpg';

// css
import classes from './Gallery.module.css';

class Gallery extends Component {
  render() {
    document.title = 'Gallery | Musée Mécanique';
    return (
      <div className={classes.wrapper}>
        <div className={classes.mainImage}>
        </div>
        <GridGallery />
      </div>
    );
  }
}

export default Gallery;
