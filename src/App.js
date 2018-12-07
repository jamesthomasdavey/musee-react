// package
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout component
import Navigation from './components/layout/Navigation/Navigation';
import Footer from './components/layout/Footer/Footer';

// page component
import Landing from './components/pages/Landing/Landing';
import History from './components/pages/History/History';

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
              <Route exact path="/history" component={History} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
