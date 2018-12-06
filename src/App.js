// package
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// component
import Navigation from './components/layout/Navigation/Navigation';
import Footer from './components/layout/Footer/Footer';

// css
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <Navigation />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
