'use client';

import React from 'react'
import Card from './cards/card'
import p1 from '../assets/1.png'
import p2 from '../assets/2.png'
import p3 from '../assets/3.png'
import p4 from '../assets/4.png'

function Projects() {
    return (
        <div>
            <div style={{ color: 'var(--text-heading)', fontSize: '55px', textAlign: 'center', marginTop: '15px' }} className='font-[Jockey]'>Projects</div>
            <div style={{ padding: '30px 20px', display: 'flex', gap: '50px 40px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Card title="Project manager app" description="The Project Manager Application is a powerful tool designed to help teams manage projects efficiently. Built with JavaScript, it provides a user-friendly interface for planning, tracking, and collaborating on projects in real-time." image={p1} live='https://project-managerapp.vercel.app/' code='https://github.com/harshad57/ProjectManager-App' />
                <Card title="Chat app" description="This is a JavaScript chat application that enables real-time communication between users. Built with modern web technologies, this app facilitates seamless messaging and robust user interactions." image={p2} live='https://chat-app-version2.vercel.app' code='https://github.com/harshad57/chat-app'/>
                <Card title="3D Motorbikes" description="I designed and developed the entire sports bike website using React and Three.js. I used Three.js to integrate interactive 3D bike models, hosted on Github, enhancing the visual experience." image={p3} live='https://sportsbike.vercel.app/' code=''/>
                <Card title="Text to Voice Converter" description="The Text to Voice Converter is a project designed to convert written text into spoken words using advanced speech synthesis technology. This tool allows users to input text and receive audio output that can be played back." image={p4} live='https://converter-harshad57.vercel.app/' code='https://github.com/harshad57/Text-to-voice-converter'/>
            </div>
        </div>
    )
}

export default Projects