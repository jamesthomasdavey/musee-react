// package
import React, { Component } from 'react';

// component
import MenuItems from './components/MenuItems/MenuItems';

// css
import classes from './Menu.module.css';

class Menu extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <MenuItems />
      </div>
    );
  }
}

export default Menu;
