// package
import React, { Component } from 'react';

// component
import Logo from './components/Logo/Logo';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Menu from './components/Menu/Menu';
import CollapsibleMenu from './components/CollapsibleMenu/CollapsibleMenu';

// css
import classes from './Navigation.module.css';

class Navigation extends Component {
  state = {
    collapsibleMenuIsExpanded: false
  };
  toggleCollapsibleMenuHandler = () => {
    this.setState({ collapsibleMenuIsExpanded: !this.state.collapsibleMenuIsExpanded });
  };
  render() {
    return (
      <div className={classes.wrapper}>
        <div className="ui container">
          <div className={classes.container}>
            <Logo />
            <ToggleButton
              collapsibleMenuIsExpanded={this.state.collapsibleMenuIsExpanded}
              toggleCollapsibleMenuHandler={this.toggleCollapsibleMenuHandler}
            />
            <Menu />
          </div>
        </div>
        <CollapsibleMenu isExpanded={this.state.collapsibleMenuIsExpanded} />
      </div>
    );
  }
}

export default Navigation;
