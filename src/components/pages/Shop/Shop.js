// package
import React, { Component } from 'react';

import shopItems from './shopItems';

// component
import ShopItem from './components/ShopItem/ShopItem';

// css
import classes from './Shop.module.css';

class Shop extends Component {
  render() {
    const shopItemsList = shopItems.map(shopItem => <ShopItem key={shopItem.name} shopItem={shopItem} />);
    return (
      <div className={classes.wrapper}>
        <div className="ui container">
          <div className="ui divided items">{shopItemsList}</div>
        </div>
      </div>
    );
  }
}

export default Shop;
