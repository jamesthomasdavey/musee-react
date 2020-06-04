import React, { Component } from 'react';
import classes from './Modal.module.css';

class Modal extends Component {
  state = {
    hasBeenClosed: false,
  };
  closeModal = (e) => {
    e.preventDefault();
    this.setState({ hasBeenClosed: true });
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
            >
              <h2 className={classes.heading} id='dialogHeading'>
                We are asking for your help!
              </h2>
              <p className={classes.text}>
                Due to the current global pandemic, the Musée Mécanique, along
                with so many other businesses, was forced to close. Please
                consider supporting us by donating on GoFundMe or by spreading
                the word!
              </p>
              <div className={classes.links}>
                <a
                  className={['addToCartButton', classes.supportLink].join(' ')}
                  href='https://www.gofundme.com/f/musee-mecanique?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Support Us
                </a>
                <br></br>
                <a
                  className={classes.closeLink}
                  href='#'
                  onClick={this.closeModal}
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
