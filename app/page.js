'use client';
import React from 'react';
import Lottie from 'lottie-react';
import home from './animations/home.json';

export default function Home() {
  return (
    <>
      <div className="home-wrapper">
        <div className="text-content">
          <div className="heading font-[Aclonica]">Hello, my name is Harshad Solkar</div>
          <div className="subheading font-[Afacad]">
            Full-Stack Developer <br />
            I build fast, modern web applications using the MERN stack and Next.js
          </div>
        </div>
        <div className="animation">
          <Lottie animationData={home} loop={true} className="lottie" />
        </div>
      </div>

      <style jsx>{`
        .home-wrapper {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          z-index: -1;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
          padding: 20px 10px;
        }

        .text-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 30px;
          padding-left: 6px;
        }

        .heading {
        text-align: center;
          font-size: 38px;
          line-height: 60px;
          color: var(--text-heading);
        }

        .subheading {
        text-align: center;
          font-size: 18px;
          line-height: 32px;
          color: var(--text-subheading);
        }

        .animation {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .lottie {
          width: 350px;
        }

        @media (min-width: 900px) {
        .home-wrapper{
        position: absolute;
        transform: translatey(-50%);
        top: 50%;
        flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 20px 20px;
        }
          .heading {
            font-size: 55px;
            line-height: 80px;
          }

          .subheading {
            font-size: 21px;
            line-height: 40px;
          }

          .text-content{
          flex: 1;
          padding-left: 20px;
          }

          .animation {
          flex: 1;
          }

          .lottie {
          width: 500px;
          }
        }
      `}</style>
    </>
  );
}
