// package
import React from 'react';

// component
import ContactForm from './components/ContactForm/ContactForm';

export default function Contact() {
  document.title = 'Contact Us | Musée Mécanique';
  return (
    <div className="ui container">
      <ContactForm />
    </div>
  );
}
