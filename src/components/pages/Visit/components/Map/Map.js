// package
import React, { Component } from 'react';

// css
import classes from './Map.module.css';

class Map extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.mapWrapper}>
          <iframe
            className={classes.map}
            title="Map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Mus%C3%A9e%20M%C3%A9canique&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          />
        </div>
      </div>
    );
  }
}

export default Map;
