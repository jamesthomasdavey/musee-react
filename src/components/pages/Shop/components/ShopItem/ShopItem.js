// package
import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

// css
import classes from './ShopItem.module.css';

const ShopItem = (props) => {
  let shopButton;

  if (props.shopItem.isSoldOut) {
    shopButton = (
      <button className='addToCartButton' disabled>
        Sold Out!
      </button>
    );
  } else {
    shopButton = renderHTML(props.shopItem.form);
  }

  return (
    <article className={['item', classes.wrapper].join(' ')}>
      <div className='image' aria-hidden='true'>
        <img alt='' src={props.shopItem.images[0]} />
        <Link
          className={classes.imageLink}
          to={`/shop/${props.shopItem.name}`}
          tabIndex='-1'
        />
      </div>
      <div className='content'>
        <h3 className={['header', classes.header].join(' ')}>
          <Link
            to={`/shop/${props.shopItem.name}`}
            className={classes.headerLink}
          >
            {props.shopItem.title}
          </Link>
        </h3>
        <div className='meta'>
          <span className={classes.price}>{props.shopItem.price}</span>
        </div>
        <div className={['description', classes.description].join(' ')}>
          {renderHTML(props.shopItem.shortDescription)}
        </div>
        <div className='extra'>{shopButton}</div>
      </div>
    </article>
  );
};

ShopItem.propTypes = {
  shopItem: PropTypes.object.isRequired,
};

export default ShopItem;
