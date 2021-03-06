// package
import React, { Component, Fragment } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

// data
import shopItems from './../../../data/shopItems';

// component
import Slideshow from './components/Slideshow/Slideshow';
import AudioSampler from './components/AudioSampler/AudioSampler';

// css
import classes from './ShopItem.module.css';

class ShopItem extends Component {
  state = {
    shopItem: {},
  };
  componentDidMount = () => {
    if (this.props.match.params.shopItem) {
      this.getShopItem(this.props.match.params.shopItem);
    }
  };
  getShopItem = (shopItemName) => {
    let shopItem;
    shopItems.forEach((item) => {
      if (item.name === shopItemName) {
        shopItem = item;
      }
    });
    this.setState({ shopItem });
  };
  blur = () => {
    document.body.focus();
  };
  render() {
    let content;
    let sampler;
    let soldOutButton;
    if (this.state.shopItem.isSoldOut) {
      soldOutButton = (
        <button className='addToCartButton' disabled>
          Sold Out!
        </button>
      );
    }
    if (this.state.shopItem.name) {
      document.title = `${this.state.shopItem.title} | Musée Mécanique`;

      if (this.state.shopItem.audio) {
        sampler = (
          <div className={classes.samplerWrapper}>
            <div className={classes.samplerLabel}>Preview: </div>
            <div className={classes.sampler}>
              <AudioSampler audio={this.state.shopItem.audio} />
            </div>
          </div>
        );
      }

      content = (
        <div className={classes.wrapper}>
          <div className='ui container'>
            <div className={classes.innerWrapper}>
              <div className={classes.image}>
                <div className={classes.slideshowWrapper}>
                  <Slideshow images={this.state.shopItem.images} />
                </div>
              </div>
              <div className={classes.info}>
                <h2 className={classes.title}>{this.state.shopItem.title}</h2>
                <p className={classes.price}>{this.state.shopItem.price}</p>
                <div className={classes.addToCartButton}>
                  {!soldOutButton && renderHTML(this.state.shopItem.form)}
                  {soldOutButton && soldOutButton}
                </div>
                {sampler}
                <div className={classes.description}>
                  {renderHTML(this.state.shopItem.longDescription)}
                </div>
              </div>
            </div>
            <div className={classes.backLinkWrapper}>
              <Link className={classes.backLink} to='/shop' onClick={this.blur}>
                <i aria-hidden='true' className='angle double left icon' /> Back
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return <Fragment>{content}</Fragment>;
  }
}

export default ShopItem;
