'use client';
import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import github from '@/app/animations/github.json';
import link from '@/app/animations/link.json';

const Card = ({ title, description, image, live, code }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className='img'>
          <img src={image} />
        </div>
        <div className="contents">
          <div className='des'>
            <div className="font-[Libertinus]" style={{ fontSize: '25px', fontWeight: 'bold', color: 'black' }}>{title}</div>
            <p className="font-[Afacad]" style={{ color:'white', fontSize: '18px' }}>{description}</p>
          </div>
          <div className='btns font-[Libertinus]'>
            <button onClick={() => window.open(live, '_blank')}>live<Lottie animationData={link} loop={true} style={{ width: '40px' }} /></button>
            <button onClick={() => window.open(code, '_blank')}>code<Lottie animationData={github} loop={true} style={{ width: '40px' }} /></button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
padding: 9px;
border-radius: 6px;
overflow: hidden;
  .card {
  position: relative;
    height: 380px;
    max-width: 600px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 12px;
    border-radius: 6px;
    transition: all 0.5s;
  }

  .card > .img {
  background: black;
  flex: 1;
  border-radius: 6px;
  z-index: 1;
  overflow: hidden;
  }

  .card > .img > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  }

  .card > .contents {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 10px 15px;
  }

  .card > .contents > .btns {
  display: flex;
  flex-direction: row;
  gap: 20px;
  }

  .card > .contents > .btns > button {
  flex: 1;
  color: #e81cff;
  background: white;
  text-align: center;
  border: 0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 3px 10px;
  transition: transform 0.3s;
  cursor: pointer;
  font-size: 18px;
  }

  .card > .contents > .btns > button:hover {
  transform: scale(1.1);
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: 50%;
    transform: translateX(-50%) rotate(0deg);
    padding: 20px;
    margin: auto;
    width: 800px;
    height: 800px;
    border-radius: 6px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
    z-index: -10;
    pointer-events: none;
    transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: translateX(-50%) rotate(180deg);
  }
    
  @media (min-width: 900px) {
    .card {
    flex-direction: row;
    }`;

export default Card;
