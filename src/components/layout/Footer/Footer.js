// package
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// component
import Hours from './components/Hours/Hours';
import Address from './components/Address/Address';

// css
import classes from './Footer.module.css';

class Footer extends Component {
  state = {
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
  render() {
    return (
      <div className={[classes.wrapper, this.state.isInverted ? classes.inverted : ''].join(' ')}>
        <div className="ui text container">
          <div className={classes.content}>
            <div className={classes.innerContent}>
              <Address isInverted={this.state.isInverted} />
              <Hours isInverted={this.state.isInverted} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
