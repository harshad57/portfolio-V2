'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import github from '@/app/animations/github.json';
import x from '@/app/animations/x.json';
import linkedin from '@/app/animations/linkedin.json';
import toast from 'react-hot-toast';

import Lottie from 'lottie-react';
import axios from 'axios';

const Form = () => {
  const [form, setform] = useState({ name: '', email: '', message: '' });
  const [status, setstatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setstatus(true);

    try {
      const res = await axios.post('/api/contact', form);
      toast.success(res.data.message);
      setstatus(false);
      form.name = '';
      form.email = '';
      form.message = '';

      console.log(res.data);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to send message"
      );
    }
  }

  return (
    <StyledWrapper>
      <div className="container">
        <form className="form" method='POST' onSubmit={handleSubmit}>
          <label htmlFor="name" className="font-[Afacad]">Name</label>
          <input required className="input" type="text" name="name" id="name" placeholder="enter your name" value={form.name}
            onChange={(e) => setform({ ...form, name: e.target.value })} />
          <label htmlFor="email" className="font-[Afacad]">Email</label>
          <input required className="input" type="email" name="email" id="email" placeholder="enter your email" value={form.email}
            onChange={(e) => setform({ ...form, email: e.target.value })} />
          <label htmlFor="message" className="font-[Afacad]">Message</label>
          <textarea required className="input" id="message" name="message" rows="4" placeholder="enter message" value={form.message}
            onChange={(e) => setform({ ...form, message: e.target.value })} />
          <input className="msg" type="submit" value={status ? 'Sending...' : 'Send'} disabled={status}/>
        </form>
        <div className="social-accounts">
          <button className="social-button" aria-label="GitHub">
            <Lottie animationData={x} loop={true} style={{ width: '43px' }} />
          </button>
          <button className="social-button" aria-label="GitHub">
            <Lottie animationData={linkedin} loop={true} style={{ width: '43px' }} />
          </button>
          <button className="social-button">
            <Lottie animationData={github} loop={true} style={{ width: '43px' }} />
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
  .container {
    position: relative;
    max-width: 600px;
    background: var(--contact);
    border-radius: 30px;
    padding: 30px 30px;
    border: 5px solid #a087ff;
    margin-top: 30px;
  }

  .form {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 20px 0;
  }

  .form label {
  align-self: flex-start;
  font-weight: bold; 
  font-size: 17px;
  color: var(--label-text); 
  margin-bottom: -10px;
  }

  .form .input {
  background: #ededed;
  color: black;
  font-size: 15px;
    width: 88%;
    display: block;
    border: none;
    padding: 20px;
    border-radius: 10px;
    box-shadow: #C4B5FD 0px 5px 10px -5px;
    border-inline: 2px solid transparent;
  }

  .form textarea {
  font-size: 15px;
    width: 92.5%;
    resize: none;
    border: none;
    padding: 20px;
    border-radius: 20px;
    box-shadow: #C4B5FD 0px 5px 10px -5px;
    border-inline: 2px solid transparent;
  }

  .form .input::-moz-placeholder, textarea::-moz-placeholder {
    color: rgb(170, 170, 170);
  }

  .form .input::placeholder, textarea::placeholder {
    color: rgb(170, 170, 170);
    font-size: 15px;
  }

  .form .input:focus, textarea:focus {
    outline: none;
    border-inline: 2px solid #C4B5FD;
  }

  .form .msg {
    font-family: 'Afacad', sans-serif;
    font-size: 18px;
    display: block;
    margin-top: 20px;
    width: 100%;
    font-weight: bold;
    background: #a087ff;
    color: white;
    padding: 18px;
    border-radius: 10px;
    border: none;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }

  .form .msg:hover {
    transform: scale(1.03);
  }

  .form .msg:active {
    transform: scale(0.96);
  }

    .form .msg:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
  opacity: 0.7;
}

.form .msg:disabled:hover {
  transform: none;
}

  .social-accounts {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
  }

  .social-accounts .social-button {
    background: #f4f4f4;
    border: none;
    padding: 3px;
    display: grid;
    border: 1px solid black;
    border-radius: 50%;
    place-content: center;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }

  .social-accounts .social-button:hover {
    transform: scale(1.2);
  }

  .social-accounts .social-button:active {
    transform: scale(1);
  }
    
    @media (min-width: 900px) {
    .container {
    padding: 30px 50px;
    margin: 30px;
  }
  .form .input {
  background: #ededed;
  color: black;
  font-size: 15px;
    width: 92.5%;
    display: block;
    border: none;
    padding: 20px;
    border-radius: 10px;
    box-shadow: #C4B5FD 0px 5px 10px -5px;
    border-inline: 2px solid transparent;
  }
    }`;

export default Form;