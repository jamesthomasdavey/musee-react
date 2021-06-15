import React, { Component } from 'react';
import classes from './Modal.module.css';

class Modal extends Component {
  state = {
    hasBeenClosed: false,
  };
  componentDidMount = () => {
    if (localStorage.reopenedModalHasBeenClosed) {
      this.setState({ hasBeenClosed: true }, () => {
        if (!this.state.hasBeenClosed) {
          document.querySelector('#dialogHeading').focus();
        }
      });
    }
  };
  closeModal = () => {
    localStorage.reopenedModalHasBeenClosed = true;
    this.setState({ hasBeenClosed: true });
  };
  shiftTabHandler = e => {};
  tabHandler = (e, callback) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      document.querySelector('#support-us').focus();
    } else if (e.keyCode === 32) {
      e.preventDefault();
      callback();
    }
  };
  shiftTabHandler = e => {
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      document.querySelector('#modal-close').focus();
    }
  };
  render() {
    return (
      <React.Fragment>
        {!this.state.hasBeenClosed && (
          <div className={classes.wrapper}>
            <div
              className={classes.dialog}
              role='dialog'
              aria-labelledby='dialogHeading'
              aria-modal='true'
            >
              <h2 className={classes.heading} tabIndex='-1' id='dialogHeading'>
                We have reopened! 🎉
              </h2>
              <p className={classes.text}>
                We are pleased to announce that we have reopened our doors as of
                June 15th! As before, we are open every day from 10:00am to
                8:00pm!
              </p>
              <p className={classes.text}>
                Thank you to everyone who has supported us during the past 15
                months. We would not have made it here without our amazing fans
                donating to our GoFundMe and liking and sharing our content.
              </p>
              <p className={classes.text}>See you soon!</p>
              <div className={classes.links}>
                {/* <a
                  className={['addToCartButton', classes.supportLink].join(' ')}
                  href='https://www.gofundme.com/f/musee-mecanique?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='support-us'
                  onKeyDown={this.shiftTabHandler}
                >
                  Support Us
                </a>
                <br></br> */}
                {/* eslint-disable-next-line */}
                <a
                  className={['addToCartButton', classes.supportLink].join(' ')}
                  href='#'
                  onClick={this.closeModal}
                  role='button'
                  id='modal-close'
                  onKeyDown={e => this.tabHandler(e, this.closeModal)}
                >
                  Close
                </a>
              </div>
            </div>
            <div onClick={this.closeModal} className={classes.background}></div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
