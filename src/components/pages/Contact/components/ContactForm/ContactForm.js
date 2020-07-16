// package
import React, { Component } from 'react';
import isEmail from 'is-email';
import isEmpty from '../../../../../validation/is-empty';
import { withRouter } from 'react-router-dom';

// function
import submitForm from './submitForm';

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
    hasSubmitted: false,
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
  changeInputHandler = (e) => {
    const eventTargetName = e.target.name;
    this.setState({ [eventTargetName]: e.target.value }, () => {
      if (this.state.hasFailed) {
        this.checkForErrors();
      }
    });
  };
  formSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true }, () => {
      this.checkForErrors(() => {
        this.setState(
          {
            errors: {},
            focus: '',
            hasFailed: false,
            hasSubmitted: true,
          },
          () => {
            submitForm(this.state.name, this.state.email, this.state.message);
          }
        );
      });
    });
  };
  checkForErrors = (callback) => {
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
        <div className='ui negative message'>
          <p className={classes.message}>{this.state.errors.server}</p>
        </div>
      );
    }
    if (this.state.hasSubmitted) {
      successMessage = (
        <div className='ui success message'>
          <p className={classes.message}>Redirecting...</p>
        </div>
      );
    }
    if (this.state.message) {
      charactersRemaining = (
        <span
          className={classes.charactersRemaining}
          aria-live='polite'
          aria-atomic='true'
        >
          Characters remaining: {1000 - this.state.message.length}
        </span>
      );
    }
    return (
      <div className={classes.wrapper}>
        <form
          className={['ui form', this.state.isSubmitting ? 'loading' : ''].join(
            ' '
          )}
          noValidate
          onSubmit={this.formSubmitHandler}
          role='group'
          aria-labelledby='send-a-message'
        >
          <h3 id='send-a-message' className={classes.header}>
            Send a Message
          </h3>
          <div className='two fields'>
            <div
              className={['field', this.state.errors.name ? 'error' : ''].join(
                ' '
              )}
            >
              <label className={classes.label} htmlFor='name'>
                Name
              </label>
              <input
                ref={(input) => {
                  this.nameInput = input;
                }}
                onChange={this.changeInputHandler}
                type='text'
                name='name'
                id='name'
                aria-describedby='nameError'
                className={classes.input}
                maxLength='100'
                value={this.state.name}
                autoFocus={
                  this.props.history.location.hash === '#send-a-message'
                }
              />
              <div
                id='nameError'
                className={[
                  'ui pointing basic label',
                  classes.validationLabel,
                  !this.state.errors.name && 'sr-only',
                ].join(' ')}
              >
                {this.state.errors.name && <span class='sr-only'>Error: </span>}
                {this.state.errors.name && this.state.errors.name}
              </div>
            </div>
            <div
              className={['field', this.state.errors.email ? 'error' : ''].join(
                ' '
              )}
            >
              <label className={classes.label} htmlFor='email'>
                Email
              </label>
              <input
                ref={(input) => {
                  this.emailInput = input;
                }}
                htmlFor='email'
                type='email'
                id='email'
                aria-describedby='emailError'
                name='email'
                onChange={this.changeInputHandler}
                className={classes.input}
                maxLength='100'
                value={this.state.email}
              />
              <div
                id='emailError'
                className={[
                  'ui pointing basic label',
                  classes.validationLabel,
                  !this.state.errors.email && 'sr-only',
                ].join(' ')}
              >
                {this.state.errors.email && (
                  <span class='sr-only'>Error: </span>
                )}
                {this.state.errors.email && this.state.errors.email}
              </div>
            </div>
          </div>
          <div
            className={['field', this.state.errors.message ? 'error' : ''].join(
              ' '
            )}
          >
            <label className={classes.label} htmlFor='message'>
              Message
            </label>
            <textarea
              ref={(textarea) => {
                this.messageTextarea = textarea;
              }}
              id='message'
              aria-describedby='messageError'
              name='message'
              onChange={this.changeInputHandler}
              className={classes.input}
              maxLength='1000'
              value={this.state.message}
            />
            <div
              id='messageError'
              className={[
                'ui pointing basic label',
                classes.validationLabel,
                !this.state.errors.message && 'sr-only',
              ].join(' ')}
            >
              {this.state.errors.message && (
                <span class='sr-only'>Error: </span>
              )}
              {this.state.errors.message && this.state.errors.message}
            </div>
            {charactersRemaining}
          </div>
          <input type='submit' className='addToCartButton' value='Send' />
        </form>
        {serverErrorMessage}
        {successMessage}
      </div>
    );
  }
}

export default withRouter(ContactForm);
