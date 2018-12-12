// package
import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

// css
import classes from './ShopItem.module.css';

const ShopItem = props => {
  let image;
  if (props.shopItem.image.length > 0) {
    image = <img alt={props.shopItem.title} src={props.shopItem.image[0]} />;
  }
  return (
    <div className={['item', classes.wrapper].join(' ')}>
      {/* <Link style={{display: 'inline-block'}} to={`/shop/${shopItem.name}`}> */}
      <div className="image">{image}</div>
      {/* </Link> */}
      <div className="content">
        <Link to={`/shop/${props.shopItem.name}`} className={['header', classes.header].join(' ')}>
          {props.shopItem.title}
        </Link>
        <div className="meta">
          <span className={classes.price}>{props.shopItem.price}</span>
        </div>
        <div className={["description", classes.description].join(" ")}>{renderHTML(props.shopItem.description)}</div>
        <div className="extra">{renderHTML(props.shopItem.form)}</div>
      </div>
    </div>
  );
};

ShopItem.propTypes = {
  shopItem: PropTypes.object.isRequired
};

export default ShopItem;
