// package
import React, { Component } from 'react';
import axios from 'axios';
import isEmail from 'is-email';
import isEmpty from '../../../../../validation/is-empty';

// css
import classes from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    errors: {},
    focus: '',
    isSubmitting: false,
    hasFailed: false,
    hasSubmitted: false
  };
  refocus = () => {
    if (this.state.focus === 'name') {
      this.nameInput.focus();
    } else if (this.state.focus === 'email') {
      this.emailInput.focus();
    } else if (this.state.focus === 'message') {
      this.messageTextarea.focus();
    }
  };
  changeInputHandler = e => {
    const eventTargetName = e.target.name;
    this.setState({ [eventTargetName]: e.target.value }, () => {
      if (this.state.hasFailed) {
        this.checkForErrors();
      }
    });
  };
  formSubmitHandler = e => {
    e.preventDefault();
    this.setState({ isSubmitting: true }, () => {
      this.checkForErrors(() => {
        axios
          .post('https://formsubmit.io/send/260f68a9-cf91-4c74-a1fa-ed6b50243914', {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
          })
          .then(() => {
            this.setState({
              name: '',
              email: '',
              message: '',
              errors: {},
              focus: '',
              hasFailed: false,
              isSubmitting: false,
              hasSubmitted: true
            });
          })
          .catch(() => {
            this.setState({
              isSubmitting: false,
              hasFailed: false,
              errors: {
                server: "We're sorry, we were unable to send your message. Please try again later."
              }
            });
          });
      });
    });
  };
  checkForErrors = callback => {
    const errors = {};
    if (!this.state.name) {
      errors.name = 'Please enter your name.';
    }
    if (!isEmail(this.state.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!this.state.email) {
      errors.email = 'Please enter your email address.';
    }
    if (this.state.message.length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }
    if (!this.state.message) {
      errors.message = 'Please enter a message.';
    }
    let hasFailed = !isEmpty(errors);
    if (this.state.hasFailed) {
      hasFailed = true;
    }
    let focus;
    if (callback) {
      if (errors.message) {
        focus = 'message';
      }
      if (errors.email) {
        focus = 'email';
      }
      if (errors.name) {
        focus = 'name';
      }
    }
    let isSubmitting = false;
    if (callback) {
      if (isEmpty(errors)) {
        isSubmitting = true;
      }
    }
    this.setState({ errors, hasFailed, isSubmitting, focus }, () => {
      if (isEmpty(errors)) {
        if (callback) {
          callback();
        }
      } else {
        this.refocus();
      }
    });
  };
  render() {
    let serverErrorMessage;
    let successMessage;
    let charactersRemaining;
    if (this.state.errors.server) {
      serverErrorMessage = (
        <div className="ui negative message">
          <p className={classes.message}>{this.state.errors.server}</p>
        </div>
      );
    }
    if (this.state.hasSubmitted) {
      successMessage = (
        <div className="ui success message">
          <p className={classes.message}>Your message has been sent.</p>
        </div>
      );
    }
    if (this.state.message) {
      charactersRemaining = (
        <span className={classes.charactersRemaining}>
          Characters remaining: {1000 - this.state.message.length}
        </span>
      );
    }
    return (
      <div className={classes.wrapper}>
        <form
          className={['ui form', this.state.isSubmitting ? 'loading' : ''].join(' ')}
          noValidate
          onSubmit={this.formSubmitHandler}
        >
          <h2 id="send-a-message" className={classes.header}>
            Send a Message
          </h2>
          <div className="two fields">
            <div className={['field', this.state.errors.name ? 'error' : ''].join(' ')}>
              <label className={classes.label} htmlFor="name">
                Name
              </label>
              <input
                ref={input => {
                  this.nameInput = input;
                }}
                onChange={this.changeInputHandler}
                type="text"
                name="name"
                id="name"
                className={classes.input}
                maxLength="100"
              />
              {this.state.errors.name && (
                <div className={['ui pointing basic label', classes.validationLabel].join(' ')}>
                  {this.state.errors.name}
                </div>
              )}
            </div>
            <div className={['field', this.state.errors.email ? 'error' : ''].join(' ')}>
              <label className={classes.label} htmlFor="email">
                Email
              </label>
              <input
                ref={input => {
                  this.emailInput = input;
                }}
                htmlFor="email"
                type="email"
                id="email"
                name="email"
                onChange={this.changeInputHandler}
                className={classes.input}
                maxLength="100"
              />
              {this.state.errors.email && (
                <div className={['ui pointing basic label', classes.validationLabel].join(' ')}>
                  {this.state.errors.email}
                </div>
              )}
            </div>
          </div>
          <div className={['field', this.state.errors.message ? 'error' : ''].join(' ')}>
            <label className={classes.label} htmlFor="message">
              Message
            </label>
            <textarea
              ref={textarea => {
                this.messageTextarea = textarea;
              }}
              id="message"
              name="message"
              onChange={this.changeInputHandler}
              className={classes.input}
              maxLength="1000"
            />
            {this.state.errors.message && (
              <div className={['ui pointing basic label', classes.validationLabel].join(' ')}>
                {this.state.errors.message}
              </div>
            )}
            {charactersRemaining}
          </div>
          <input type="submit" className="addToCartButton" value="Send" />
        </form>
        {serverErrorMessage}
        {successMessage}
      </div>
    );
  }
}

export default ContactForm;
