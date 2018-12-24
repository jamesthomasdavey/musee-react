// package
import React, { Component } from 'react';
import axios from 'axios';

// keys
import keys from './../../../../../../../data/keys';

// component
import YelpStars from './components/YelpStars/YelpStars';

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
    let yelpStars;
    let reviewCount;
    if (!this.state.isLoading) {
      yelpStars = <YelpStars rating={this.state.rating} />;
      reviewCount = <span className={classes.reviewCount}>{this.state.reviewCount} Reviews</span>;
    }
    return (
      <div className={classes.wrapper}>
        <div className={classes.yelpStarsWrapper}>{yelpStars}</div>
        <div className={classes.reviewCountWrapper}>{reviewCount}</div>
      </div>
    );
  }
}

export default Yelp;
