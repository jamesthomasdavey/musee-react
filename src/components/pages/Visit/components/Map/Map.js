// package
import React, { Component } from 'react';

// css
import classes from './Map.module.css';

// img
import loading from './img/loading.gif';

class Map extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div style={{ backgroundImage: `url(${loading})` }} className={classes.mapWrapper}>
          <iframe
            className={classes.map}
            title="Map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Mus%C3%A9e%20M%C3%A9canique&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>
      </div>
    );
  }
}

export default Map;
