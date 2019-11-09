// package
import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

// css
import classes from './ShopItem.module.css';

const ShopItem = props => {
  return (
    <div className={['item', classes.wrapper].join(' ')}>
      <div className="image">
        <img alt={props.shopItem.title} src={props.shopItem.images[0]} />
        <Link
          className={classes.imageLink}
          to={`/shop/${props.shopItem.name}`}
        />
      </div>
      <div className="content">
        <Link
          to={`/shop/${props.shopItem.name}`}
          className={['header', classes.header].join(' ')}
        >
          {props.shopItem.title}
        </Link>
        <div className="meta">
          <span className={classes.price}>{props.shopItem.price}</span>
        </div>
        <div className={['description', classes.description].join(' ')}>
          {renderHTML(props.shopItem.shortDescription)}
        </div>
        <div className="extra">{renderHTML(props.shopItem.form)}</div>
      </div>
    </div>
  );
};

ShopItem.propTypes = {
  shopItem: PropTypes.object.isRequired
};

export default ShopItem;
