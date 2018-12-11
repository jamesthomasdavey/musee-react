// package
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout component
import Navigation from './components/layout/Navigation/Navigation';
import Footer from './components/layout/Footer/Footer';

// page component
import Landing from './components/pages/Landing/Landing';
import Visit from './components/pages/Visit/Visit';
import Story from './components/pages/Story/Story';
import Gallery from './components/pages/Gallery/Gallery';
import Shop from './components/pages/Shop/Shop';

// css
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/visit" component={Visit} />
              <Route exact path="/story" component={Story} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/shop" component={Shop} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
