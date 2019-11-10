// package
import React, { Component, Fragment } from 'react';
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
    isInverted: false,
    isScrolled: false
  };
  componentDidMount = () => {
    window.addEventListener('scroll', this.scrollHandler, true);
    if (this.props.location.pathname === '/') {
      this.setState({ isInverted: true });
    } else {
      this.setState({ isInverted: false });
    }
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scrollHandler, true);
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.location.pathname === '/') {
      this.setState({ isInverted: true });
    } else {
      this.setState({ isInverted: false });
    }
  };
  toggleCollapsibleMenuHandler = () => {
    this.setState({
      collapsibleMenuIsExpanded: !this.state.collapsibleMenuIsExpanded
    });
  };
  closeCollapsibleMenuHandler = () => {
    this.setState({ collapsibleMenuIsExpanded: false });
  };
  scrollHandler = e => {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    if (scrollTop > 68) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };
  render() {
    return (
      <Fragment>
        <div
          className={[
            classes.wrapper,
            this.state.isInverted ? classes.inverted : '',
            this.state.isScrolled ? classes.scrolled : ''
          ].join(' ')}
        >
          <div className="ui container">
            <div className={classes.container}>
              <Logo
                isInverted={this.state.isInverted}
                isScrolled={this.state.isScrolled}
              />
              <ToggleButton
                collapsibleMenuIsExpanded={this.state.collapsibleMenuIsExpanded}
                toggleCollapsibleMenuHandler={this.toggleCollapsibleMenuHandler}
                isInverted={this.state.isInverted}
              />
              <Menu isInverted={this.state.isInverted} />
            </div>
          </div>
          <CollapsibleMenu
            isInverted={this.state.isInverted}
            isExpanded={this.state.collapsibleMenuIsExpanded}
            closeNav={this.closeCollapsibleMenuHandler}
          />
        </div>
        <div
          className={[
            this.state.isScrolled ? classes.pseudoWrapper : '',
            this.state.collapsibleMenuIsExpanded ? classes.expanded : ''
          ].join(' ')}
        />
      </Fragment>
    );
  }
}

export default withRouter(Navigation);
