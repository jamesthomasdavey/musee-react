// package
import React, { Component } from 'react';
import ReactGridGallery from 'react-grid-gallery';

// images
import imageArray from './imageArray';

class GridGallery extends Component {
  render() {
    return (
      <ReactGridGallery images={imageArray} enableImageSelection={false} backdropClosesModal />
    );
  }
}

export default GridGallery;
