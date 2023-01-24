import React, { useEffect, useState } from 'react';

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
    
    // Check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    alert('Thank you for your submission!');

    // Clear out input after successful form submission
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  }

  const handleOnBlur = (e) => {
    console.log('Input lost focus');
    if (!name && e.target.id === 'name') {
      setErrorMessage('Name is required.');
      return;
    } 
    if (!email && e.target.id === 'email') {
      setErrorMessage('Email is required.');
      return;
    }
    if (!message && e.target.id === 'message') {
      setErrorMessage('Message is required.');
      return;
    }
  } 
  
  const handleOnFocus = (e) => {
    console.log('Input has focus');
    setErrorMessage('');
    return;
  }

  return (
    <div>
      <h1>Contact</h1>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input value={name} type="text" className="form-control" id="name" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur}/>
        </div>

        <div className="mb-3">
          <label for="email" className="form-label">Email Address</label>
          <input value={email} type="email" className="form-control" id="email" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur}/>
        </div>

        <div className="mb-3">
          <label for="message" className="form-label">Message</label>
          <input value={message} type="text" className="form-control" id="message" onChange={handleInputChange} onFocus={handleOnFocus} onBlur={handleOnBlur}/>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
      </form>
      
        <div>
          <p className="error-text" id='error-message'>{errorMessage}</p>
        </div>
      
    </div>
  );
}
