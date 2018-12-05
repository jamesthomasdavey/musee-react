// package
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// component
import Logo from './components/Logo/Logo';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Menu from './components/Menu/Menu';
import CollapsibleMenu from './components/CollapsibleMenu/CollapsibleMenu';

// css
import classes from './Navigation.module.css';

class Navigation extends Component {
  state = {
    collapsibleMenuIsExpanded: false,
    isInverted: false
  };
  componentDidMount = () => {
    if (this.props.location.pathname === '/') {
      this.setState({ isInverted: true });
    } else {
      this.setState({ isInverted: false });
    }
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.location.pathname === '/') {
      this.setState({ isInverted: true });
    } else {
      this.setState({ isInverted: false });
    }
  };
  toggleCollapsibleMenuHandler = () => {
    this.setState({ collapsibleMenuIsExpanded: !this.state.collapsibleMenuIsExpanded });
  };
  render() {
    return (
      <div className={[classes.wrapper, this.state.isInverted ? classes.inverted : ''].join(' ')}>
        <div className="ui container">
          <div className={classes.container}>
            <Logo isInverted={this.state.isInverted} />
            <ToggleButton
              collapsibleMenuIsExpanded={this.state.collapsibleMenuIsExpanded}
              toggleCollapsibleMenuHandler={this.toggleCollapsibleMenuHandler}
            />
            <Menu isInverted={this.state.isInverted} />
          </div>
        </div>
        <CollapsibleMenu isExpanded={this.state.collapsibleMenuIsExpanded} />
      </div>
    );
  }
}

export default withRouter(Navigation);
