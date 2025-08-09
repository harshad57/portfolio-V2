'use client';
import React from 'react';
import Button from './buttons/btn';
import about from '@/app/animations/about.json';
import Lottie from 'lottie-react';

export default function About() {
  return (
    <>
      <div className="about-section">
        <div className="heading font-[Jockey]">About me</div>
        <div className="about-content">
          <div className="text-and-skills">
            <div className="description font-[Afacad]">
              I'm Harshad, a full-stack web developer based in Mumbai, <br />
              specializing in building modern, scalable, and high-performance web applications. With expertise in both frontend and backend, <br />
              I craft seamless digital experiences using the MERN stack and Next.js.
            </div>

            <div>
              <div className="skills-heading font-[Unbounded]">skills</div>
              <div className="skills-container">
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" name="JavaScript" color="#323330" />
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" name="Tailwind" color="#112240" />
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" name="React.js" color="#20232a" />
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" name="Next.js" color="#000000" />
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" name="Node.js" color="#6DA55F" />
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" name="Express" color="#404d59" />
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" name="MongoDB" color="#4ea94b" />
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" name="Postgres" color="#316192" />
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" name="GitHub" color="#5e5e5e" />
                <Button logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" name="Figma" color="#F24E1E" />
              </div>
            </div>
          </div>

          <div className="animation-wrapper">
            <Lottie animationData={about} loop={true} className="about-lottie" />
          </div>
        </div>
      </div>

      <style jsx>{`

        .heading {
          color: var(--text-heading);
          font-size: 55px;
          text-align: center;
          margin-top: 15px;
        }

        .about-content {
          display: flex;
          flex-direction: column-reverse;
          gap: 30px;
        }

        .text-and-skills {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 10px;
        }

        .description {
          color: var(--text-subheading);
          font-size: 20px;
          line-height: 32px;
        }

        .skills-heading {
          font-size: 35px;
          color: var(--skills);
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px 25px;
          padding: 20px 0;
        }

        .animation-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-lottie {
          width: 350px;
        }

        @media (min-width: 900px) {
          .heading {
            font-size: 55px;
          }

          .description {
            font-size: 19px;
            line-height: 40px;
          }

          .about-lottie {
            width: 500px;
          }

          .about-content {
            padding-left: 50px;
          display: flex;
          flex-direction: row;
          gap: 30px;
          }

          .text-and-skills{
          flex:1;
          }
          .animation-wrapper{
          flex:1;
          }
        }
      `}</style>
    </>
  );
}
