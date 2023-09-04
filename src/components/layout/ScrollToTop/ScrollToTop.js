import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      document
        .querySelector(".Navigation_headerWrapper__1l5L_")
        .scrollIntoView();
    }
  }
  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default withRouter(ScrollToTop);
