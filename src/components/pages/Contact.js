import React, { useState } from 'react';
import '../../styles/Contact.css';

// Helper function to check if email is valid
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {
  // State variables for fields in the form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // inputType is either name, email, or message
    const inputType = e.target.id;
    // inputValue is the text provided for that input field
    const inputValue = e.target.value;

    // Based on input type, set state of either name, email, or message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }; 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check to see if the email is invalid. If so, set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid.');
      return;
    }

    alert('Thank you for your submission!');

    // Clear out input after successful form submission
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  }

  // Set correct error message based on which input field lost focus and does not have text entered
  const handleOnBlur = (e) => {
    // If name input lost focus and empty
    if (!name && e.target.id === 'name') {
      setErrorMessage('Name is required.');
      return;
    } 
    // If email input lost focus and empty
    if (e.target.id === 'email') {
      if (!email) {
        setErrorMessage('Email is required.');
        return;
      } else {
        // If email input lost focus and email was provided, check to see if the email is invalid
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid.');
          return;
        }
      }
    }
    // If message input lost focus and empty
    if (!message && e.target.id === 'message') {
      setErrorMessage('Message is required.');
      return;
    }
  } 
  
  const handleOnFocus = (e) => {
    setErrorMessage('');
    return;
  }

  // Return Contact header and contact form
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Contact</h1>
      <form className="col-10 col-xl-6">
        {/* Name input field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input value={name} type="text" className="form-control" id="name" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
        </div>

        {/* Email input field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input value={email} type="email" className="form-control" id="email" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
        </div>

        {/* Message textarea field */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea value={message} className="form-control" id="message" rows="3" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur}></textarea>
        </div>

        <button type="submit" className="btn" onClick={handleFormSubmit}><h5 className="m-0">Submit</h5></button>
      </form>

      {/* Section where errorMessage will be displayed if exists */}
      <div>
        <p className="error-text" id='error-message'>{errorMessage}</p>
      </div>

    </div>
  );
}
