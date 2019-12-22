// package
import React, { Component } from 'react';
import Gallery from './components/react-grid-gallery/lib/Gallery';

// images
import imageArray from './imageArray';

class GridGallery extends Component {
  render() {
    return (
      <div style={{ paddingTop: '2px' }}>
        <Gallery
          images={imageArray}
          enableImageSelection={false}
          backdropClosesModal
        />
      </div>
    );
  }
}

export default GridGallery;
