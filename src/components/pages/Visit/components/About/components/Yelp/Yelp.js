// package
import React, { Component } from 'react';
import axios from 'axios';

// keys
import keys from './../../../../../../../data/keys';

// component
import YelpStars from './components/YelpStars/YelpStars';

// img
import yelpLogo from './img/yelpLogo.png';

// css
import classes from './Yelp.module.css';

class Yelp extends Component {
  state = {
    isLoading: true,
    rating: '',
    reviewCount: ''
  };
  componentDidMount = () => {
    axios
      .get('https://api.yelp.com/v3/businesses/UNQJh-kREbt0MRIF5d830A', {
        headers: { Authorization: `Bearer ${keys.yelpApiKey}` }
      })
      .then(res => {
        this.setState({
          isLoading: false,
          rating: res.data.rating,
          reviewCount: res.data.review_count
        });
      });
  };
  render() {
    if (!this.state.isLoading) {
      return (
        <a
          href="https://www.yelp.com/biz/mus%C3%A9e-m%C3%A9canique-san-francisco-4"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.yelpLink}
        >
          <div className={classes.wrapper}>
            <div className={classes.yelpStarsWrapper}>
              <YelpStars rating={this.state.rating} />
            </div>
            <div className={classes.reviewCountWrapper}>
              {' '}
              <span className={classes.reviewCount}>
                {this.state.reviewCount} Reviews on{' '}
                <img src={yelpLogo} alt="yelp-logo" className={classes.yelpLogo} />
              </span>
            </div>
          </div>{' '}
        </a>
      );
    } else {
      return null;
    }
  }
}

export default Yelp;
