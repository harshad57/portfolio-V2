'use client';
import React from 'react';
import styled from 'styled-components';

const Button = ({ logo, name, color }) => {
  return (
    <StyledWrapper color={color}>
      <button>
        <div>
          <img src={logo} alt={name} style={{ width: "25px", height: '100%' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>{name}</div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    font-family: arial;
    display: flex;
    justify-content: space-around;
    width: 145px;
    padding: 0px 8px;
    height: 60px;
    line-height: 2.5em;
    overflow: hidden;
    cursor: pointer;
    font-size: 17px;
    z-index: 1;
    color: ${(props) => props.color};
    border: 2px solid ${(props) => props.color};
    border-radius: 6px;
    position: relative;
    background: var(--btn);
  }

  button::before {
    position: absolute;
    content: "";
    background: ${(props) => props.color};
    width: 200px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  button:hover {
    color: white;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  button:hover::before {
    top: -30px;
    left: -30px;
  }`;

export default Button;
