// package
import React, { Component } from 'react';

// data
import shopItems from './../../../data/shopItems';

// component
import ShopItem from './components/ShopItem/ShopItem';

// css
import classes from './Shop.module.css';

class Shop extends Component {
  render() {
    document.title = 'Shop | Musée Mécanique';
    const shopItemsList = shopItems.map((shopItem) => (
      <ShopItem key={shopItem.name} shopItem={shopItem} />
    ));
    return (
      <div className={classes.wrapper}>
        <h2 className='sr-only'>Shop</h2>
        <div className='ui container'>
          <div className='ui divided items'>{shopItemsList}</div>
        </div>
      </div>
    );
  }
}

export default Shop;
