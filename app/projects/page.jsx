'use client';

import React from 'react'
import Card from './cards/card'
import p1 from '../assets/1.png'
import p2 from '../assets/2.png'

function Projects() {
    return (
        <div>
            <div style={{ color: 'var(--text-heading)', fontSize: '55px', textAlign: 'center', marginTop: '15px' }} className='font-[Jockey]'>Projects</div>
            <div style={{ padding: '30px 20px', display: 'flex', gap: '50px 40px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Card title="Project manager app" description="The Project Manager Application is a powerful tool designed to help teams manage projects efficiently. Built with JavaScript, it provides a user-friendly interface for planning, tracking, and collaborating on projects in real-time." image={p1} live='https://project-managerapp.vercel.app/' code='https://github.com/harshad57/ProjectManager-App' />
                <Card title="Chat app" description="This is a JavaScript chat application that enables real-time communication between users. Built with modern web technologies, this app facilitates seamless messaging and robust user interactions." image={p2} live='https://chat-app-version2.vercel.app' code='https://github.com/harshad57/chat-app'/>
                <Card title="coming soon..." description="..." image='' live='' code=''/>
                <Card title="coming soon..." description="..." image='' live='' code=''/>
            </div>
        </div>
    )
}

export default Projects