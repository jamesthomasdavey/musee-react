// package
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// component
import MenuItems from './components/MenuItems/MenuItems';

// css
import classes from './Menu.module.css';

class Menu extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <MenuItems isInverted={this.props.isInverted} />
      </div>
    );
  }
}

Menu.propTypes = {
  isInverted: PropTypes.bool.isRequired
};

export default Menu;
