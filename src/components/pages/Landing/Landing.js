// package
import React, { Component } from "react";

// component
import Slideshow from "./components/Slideshow/Slideshow";

// css
import classes from "./Landing.module.css";

class Landing extends Component {
  render() {
    document.title = "Welcome to the Musée Mécanique";
    return (
      <main className={classes.wrapper}>
        <h1 className="sr-only">Landing</h1>
        <Slideshow />
      </main>
    );
  }
}

export default Landing;
