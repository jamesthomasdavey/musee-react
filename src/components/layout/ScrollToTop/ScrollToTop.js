import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      document.body.scrollTo({
        top: 0,
        left: 0,
      });
    }
    if (this.props.location.pathname.substr("/shop#")) {
      setTimeout(() => {
        document.body.scrollBy(0, -100);
      }, 0);
    }
  }
  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default withRouter(ScrollToTop);
