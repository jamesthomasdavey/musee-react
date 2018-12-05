// package
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// component
import Navigation from './components/layout/Navigation/Navigation';

// css
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
        </div>
      </Router>
    );
  }
}

export default App;
