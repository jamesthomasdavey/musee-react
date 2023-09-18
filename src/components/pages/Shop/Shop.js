// package
import React, { Component } from "react";

// data
import shopItems from "./../../../data/shopItems";

// component
import ShopItem from "./components/ShopItem/ShopItem";

// css
import classes from "./Shop.module.css";

class Shop extends Component {
  render() {
    document.title = "Shop | Musée Mécanique";
    const shopItemsList = shopItems.map((shopItem) => (
      <ShopItem key={shopItem.name} shopItem={shopItem} />
    ));
    return (
      <main>
        <h1 className="sr-only">Shop</h1>
        <div className={[classes.bandcampBanner].join(" ")}>
          <a
            className={classes.bandcampLink}
            href="https://museemecaniquesf.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">🎹</span>{" "}
            <span className={classes.linkText}>
              Digital versions of our CDs are now available on Bandcamp!
            </span>{" "}
            <span aria-hidden="true">🎹</span>
          </a>
        </div>
        <div className={classes.wrapper}>
          <div className="ui container">
            <div className="ui divided items">{shopItemsList}</div>
          </div>
        </div>
      </main>
    );
  }
}

export default Shop;
