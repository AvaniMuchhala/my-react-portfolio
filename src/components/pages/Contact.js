import React, { useState, useRef } from 'react';
import '../../styles/Contact.css';
import emailjs from '@emailjs/browser';

// Helper function to check if email is valid
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {
  // State variables for fields in the form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const form = useRef();

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
    } else if (inputType === 'subject') {
      setSubject(inputValue);
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

    emailjs.sendForm('contact_service', 'portfolio_contact_form', form.current, 'vl-BUURSLeZ3End79')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setShowModal(true);

    // Clear out input after successful form submission
    setName('');
    setEmail('');
    setSubject('');
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
    // If subject input lost focus and empty
    if (!subject && e.target.id === 'subject') {
      setErrorMessage('Subject is required.');
      return;
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
      <form ref={form} className="col-10 col-xl-6">
        {/* Name input field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input value={name} type="text" name="user_name" className="form-control" id="name" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
        </div>

        {/* Email input field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input value={email} type="email" name="user_email" className="form-control" id="email" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
        </div>

        {/* Subject input field */}
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input value={subject} type="subject" name="subject" className="form-control" id="subject" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
        </div>

        {/* Message textarea field */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea value={message} name="message" className="form-control" id="message" rows="3" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur}></textarea>
        </div>

        <button type="submit" className="btn" data-toggle="modal" data-target="#exampleModal" onClick={handleFormSubmit}><h5 className="m-0">Submit</h5></button>
      </form>

      {/* Section where errorMessage will be displayed if exists */}
      <div>
        <p className="error-text" id='error-message'>{errorMessage}</p>
      </div>

      {/* Modal popup after successful contact form submission */}
      <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalTitle" aria-hidden="true" style={{ display: showModal ? 'block' : 'none'}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h4>Thank you for your submission!</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
