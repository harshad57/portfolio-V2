'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Lottie from 'lottie-react';
import github from '@/app/animations/github.json';
import link from '@/app/animations/link.json';

const Card = ({ title, description, image, live, code }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="img-container">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="contents">
          <div className="text-section">
            <h2 className="title font-[Libertinus]">{title}</h2>
            <p className="description font-[Afacad]">{description}</p>
          </div>
          <div className="btns font-[Libertinus]">
            <button className="btn-live" onClick={() => window.open(live, '_blank')}>
              Live Project <Lottie animationData={link} loop={true} className="lottie-icon" />
            </button>
            <button className="btn-code" onClick={() => window.open(code, '_blank')}>
              Source Code <Lottie animationData={github} loop={true} className="lottie-icon" />
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* ── Light mode tokens (DEFAULT) ── */
  --card-bg:          #ffffff;
  --card-border:      #e2e5ec;
  --card-border-hover:#c7ccd8;
  --card-shadow:      rgba(15, 23, 42, 0.06);
  --card-shadow-hover:rgba(15, 23, 42, 0.12);
  --img-border:       #e2e5ec;

  --title-color:      #0f172a;   /* slate-900 */
  --desc-color:       #475569;   /* slate-600 */

  --btn-primary-bg:   #1e293b;   /* slate-800 */
  --btn-primary-text: #f8fafc;
  --btn-primary-hover:#334155;   /* slate-700 */

  --btn-secondary-bg:   #f8fafc;
  --btn-secondary-text: #334155;
  --btn-secondary-border:#d1d5e0;
  --btn-secondary-hover-bg:    #f1f5f9;
  --btn-secondary-hover-border:#94a3b8;
  --btn-secondary-hover-text:  #0f172a;

  /* ── Dark mode tokens (Notice the '&' symbol) ── */
  html.dark & {
    --card-bg:          #161b27;   /* deep navy-charcoal */
    --card-border:      #252d3d;
    --card-border-hover:#3b4460;
    --card-shadow:      rgba(0, 0, 0, 0.35);
    --card-shadow-hover:rgba(0, 0, 0, 0.55);
    --img-border:       #252d3d;

    --title-color:      #e8edf5;   /* near-white with cool tint */
    --desc-color:       #8b93a8;   /* muted slate-blue */

    --btn-primary-bg:   #4f6bff;   /* vibrant indigo — pops on dark bg */
    --btn-primary-text: #ffffff;
    --btn-primary-hover:#6b82ff;

    --btn-secondary-bg:   #1e2535;
    --btn-secondary-text: #9faec4;
    --btn-secondary-border:#2e3a50;
    --btn-secondary-hover-bg:    #252d3d;
    --btn-secondary-hover-border:#4f6bff;
    --btn-secondary-hover-text:  #e8edf5;
  }

  /* ── STYLES ── */
  width: 100%;
  padding: 4px 0;
  display: flex;
  justify-content: center;

  .card {
    padding: 15px;
    width: 100%;
    max-width: 900px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px var(--card-shadow), 0 2px 4px -1px var(--card-shadow);
    transition: all 0.3s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px var(--card-shadow-hover), 0 10px 10px -5px var(--card-shadow);
    border-color: var(--card-border-hover);
  }

  .img-container {
    position: relative;
    width: 100%;
    height: 260px;
    border-bottom: 3px solid var(--img-border);
    overflow: hidden;
    border-radius: 15px;
  }

  .contents {
    padding: 10px;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    gap: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--title-color);
    margin: 0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  .description {
    font-size: 1.05rem;
    color: var(--desc-color);
    line-height: 1.6;
    margin: 0;
  }

  .btns {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  button {
    flex: 1;
    padding: 9px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-live {
    background: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    border: 1px solid transparent;
  }

  .btn-live:hover {
    background: var(--btn-primary-hover);
    box-shadow: 0 4px 6px -1px var(--card-shadow-hover);
  }

  .btn-code {
    background: var(--btn-secondary-bg);
    color: var(--btn-secondary-text);
    border: 1px solid var(--btn-secondary-border);
  }

  .btn-code:hover {
    background: var(--btn-secondary-hover-bg);
    border-color: var(--btn-secondary-hover-border);
    color: var(--btn-secondary-hover-text);
  }

  .lottie-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    .card {
      flex-direction: row;
      height: 340px;
    }

    .img-container {
      width: 45%;
      height: 100%;
      border-bottom: none;
      border-right: 1px solid var(--img-border);
    }

    .contents {
      width: 55%;
      padding: 15px;
      padding-left: 30px;
    }

    .btns {
      flex-direction: row;
    }

  @media (min-width: 768px) {
    .card {
      flex-direction: row;
      height: 340px;
    }

    .img-container {
      width: 45%;
      height: 100%;
      border-bottom: none;
      border-right: 1px solid var(--img-border);
    }

    .contents {
      width: 55%;
      padding: 15px;
      padding-left: 30px;
    }

    .btns {
      flex-direction: row;
    }
  }
`;

export default Card;