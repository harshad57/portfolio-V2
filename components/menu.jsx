import React from 'react';
import styled from 'styled-components';

const Menu = ({ value, click }) => {
  return (
    <StyledWrapper className='menu'>
      <label className="hamburger">
        <input type="checkbox" onClick={click} checked={value} readOnly />
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  position: fixed;
  top: 13px;
  left: 13px;
  z-index: 10;
  display: block;

  .menu{
  display: block;
  }

  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 43px;
    transition: transform 0.4s ease;
  }

  .line {
    fill: none;
    stroke: #7c3aed;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 0.4s ease, stroke-dashoffset 0.4s ease;
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }

  @media (min-width: 900px) {
 &.menu {
      display: none;
    }
  }
`;

export default Menu;
