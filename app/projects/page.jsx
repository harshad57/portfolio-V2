import React from 'react'
import Card from './cards/card'

function Projects() {
    return (
        <div>
            <div style={{ color: 'var(--text-heading)', fontSize: '55px', textAlign: 'center', marginTop: '15px' }} className='font-[Jockey]'>Projects</div>
            <div style={{ padding: '30px 20px', display: 'flex',gap: '60px 40px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Card title="Chat app" description="this is a chat app" image="https://camo.githubusercontent.com/692a53f74a76bc7e1efdc716ee29af71eaf870eeff66a5a6c8671af672847d9b/68747470733a2f2f696d672e6672656570696b2e636f6d2f7072656d69756d2d766563746f722f636861742d6170702d6c6f676f2d64657369676e2d74656d706c6174652d63616e2d62652d757365642d69636f6e2d636861742d6170706c69636174696f6e2d6c6f676f5f3630353931302d313732342e6a7067" live='https://chat-app-version2.vercel.app' code='https://github.com/harshad57/chat-app'/>
                <Card title="coming soon..." description="..." image="https://static.vecteezy.com/system/resources/thumbnails/017/301/057/small_2x/coming-soon-stamp-rubber-with-grunge-style-on-white-background-vector.jpg" live='' code=''/>
                <Card title="coming soon..." description="..." image="https://static.vecteezy.com/system/resources/thumbnails/017/301/057/small_2x/coming-soon-stamp-rubber-with-grunge-style-on-white-background-vector.jpg" live='' code=''/>
                <Card title="coming soon..." description="..." image="https://static.vecteezy.com/system/resources/thumbnails/017/301/057/small_2x/coming-soon-stamp-rubber-with-grunge-style-on-white-background-vector.jpg" live='' code=''/>
            </div>
        </div>
    )
}

export default Projects