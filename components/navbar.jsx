'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import Menu from './menu';

const Navbar = () => {
  const pathname = usePathname();
  const [value, setvalue] = useState(false); // keep your variable names

  const click = () => {
    setvalue(prev => {
      const newValue = !prev;
      return newValue;
    });
  };

  return (
    <StyledWrapper>
      <Menu value={value} click={click}/>
      <section className={value ? 'open' : ''}>
        <NavItem href="/" label="Home" pathname={pathname} click={click} />
        <NavItem href="/about" label="About" pathname={pathname} click={click} />
        <NavItem href="/projects" label="Projects" pathname={pathname} click={click} />
        <NavItem href="/contact" label="Contact" pathname={pathname} click={click} />
      </section>
    </StyledWrapper>
  );
};

const NavItem = ({ href, label, pathname, click }) => {
  const isActive = pathname === href;

  return (
    <div className={`label ${isActive ? 'active' : ''}`}>
      <Link href={href} legacyBehavior>
        <a className="icon" onClick={click}>{label}</a>
      </Link>
    </div>
  );
};

const StyledWrapper = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  section {
    position: fixed;
    border: 1px solid black;
    z-index: 6;
    left: 0;
    top: 0;
    display: flex;
    height: 100%;
    width: 300px;
    flex-direction: column;
    transform: translatex(-100%);
    align-items: center;
    backdrop-filter: blur(20px) brightness(0.7);
    border-radius: 4px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

    section.open{
    transform: translatex(0%);
    }

  .label {
    padding: 20px 3px;
    margin-top: 50px;
    text-align: center;
    position: relative;
    transition: all 200ms ease;
  }

  .label a {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 17px;
    color: white;
    text-decoration: none;
    transition: all 200ms ease;
    display: inline-block;
  }

  .label:hover a {
    opacity: 0.6;
    transform: translateY(-2px);
  }

  .label::before {
    content: "";
    position: absolute;
    bottom: 9px;
    left: 50%;
    height: 4px;
    width: 0;
    background-color: #b09dff;
    border-radius: 5px;
    transform: translateX(-50%);
    transition: width 200ms ease;
  }

  .label.active a {
    color: #7c3aed;
    font-weight: 600;
    transform: scale(1.05);
  }

  .label.active::before {
    width: 100%;
  }

  @media (min-width: 900px) {

    section {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 15px;
    width: 60%;
    height: 60px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    background-color: #f5f3ff;
    border-radius: 4px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  }

  section.open{
    transform: translatex(-50%);
    }

  .label{
  margin: 0;
  }

   .label a {
    color: #1F2937;
    font-weight: 400;
    font-size: 16px;
  }
  }
`;

export default Navbar;
