// package
import React, { Component } from "react";

// component
import GridGallery from "./components/GridGallery/GridGallery";

// css
import classes from "./Gallery.module.css";

class Gallery extends Component {
  render() {
    document.title = "Gallery | Musée Mécanique";
    return (
      <React.Fragment>
        <main>
          <h1 className="sr-only">Gallery</h1>
          <div className={[classes.virtualTourBanner].join(" ")}>
            <a
              className={classes.virtualTourLink}
              href="https://my.matterport.com/show/?m=sn3wzHHcdiw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">👀</span>{" "}
              <span className={classes.linkText}>
                Explore the Musée Mécanique in our 3D virtual tour!
              </span>{" "}
              <span aria-hidden="true">👀</span>
            </a>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.mainImage}></div>
            <GridGallery />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Gallery;
