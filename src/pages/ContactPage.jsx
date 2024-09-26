import React, { useState } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };
  return (
    <div id="contact-page">
      <h1>Contact Me</h1>

      <form>
       
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Name</label>
          <textarea className="form-control" id="exampleFormControlInput2"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" 
          className={`form-control ${emailError ? 'is-invalid' : ''}`}
          id="exampleFormControlInput1" placeholder="name@example.com" 
          value= {email}
          onChange= {(e) => setEmail(e.target.value)}
          onBlur= {handleEmailBlur}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}