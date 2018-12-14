// package
import React, { Component, Fragment } from 'react';
import renderHTML from 'react-render-html';

// data
import shopItems from './../../../data/shopItems';

// component
import Slideshow from './components/Slideshow/Slideshow';

// css
import classes from './ShopItem.module.css';

class ShopItem extends Component {
  state = {
    shopItem: {}
  };
  componentDidMount = () => {
    if (this.props.match.params.shopItem) {
      this.getShopItem(this.props.match.params.shopItem);
    }
  };
  getShopItem = shopItemName => {
    let shopItem;
    shopItems.forEach(item => {
      if (item.name === shopItemName) {
        shopItem = item;
      }
    });
    this.setState({ shopItem });
  };
  render() {
    let content;
    if (this.state.shopItem.name) {
      document.title = this.state.shopItem.title;

      let description;

      if (this.state.shopItem.longDescription) {
        description = renderHTML(this.state.shopItem.longDescription);
      } else {
        description = renderHTML(this.state.shopItem.description);
      }

      content = (
        <div className={classes.wrapper}>
          <div className="ui container">
            <div className={classes.upperWrapper}>
              <div className={classes.image}>
                <div className={classes.slideshowWrapper}>
                  <Slideshow images={this.state.shopItem.image} />
                </div>
              </div>
              <div className={classes.info}>
                <h2 className={classes.title}>{this.state.shopItem.title}</h2>
                <h3 className={classes.price}>{this.state.shopItem.price}</h3>
                {renderHTML(this.state.shopItem.form)}
                <div className={classes.sideDescription}>{description}</div>
              </div>
            </div>
            <div className={classes.lowerWrapper}>{description}</div>
          </div>
        </div>
      );
    }
    return <Fragment>{content}</Fragment>;
  }
}

export default ShopItem;
