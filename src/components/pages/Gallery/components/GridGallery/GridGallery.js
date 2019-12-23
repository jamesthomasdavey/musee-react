// package
import React, { Component } from 'react';
import ReactGridGallery from 'react-grid-gallery'

// images
import imageArray from './imageArray';

class GridGallery extends Component {
  render() {
    return (
      <div style={{ paddingTop: '2px' }}>
        <ReactGridGallery
          images={imageArray}
          enableImageSelection={false}
          backdropClosesModal
        />
      </div>
    );
  }
}

export default GridGallery;
