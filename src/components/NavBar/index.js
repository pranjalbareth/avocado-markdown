import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="NavBar">
            <div className='NavBar_title'>
                <div className='Navbar_title_logo'>🥑 Avocado Markdown</div>
            </div>
            <div className='NavBar_items'>
                <div className='Navbar_title_contribute'><a href={'https://github.com/pranjalbareth/avocado-markdown'} target="_blank" rel="noopener noreferrer">Contribute</a></div>
                <div className='Navbar_title_creator'><a href={'https://twitter.com/pranjalbareth'} target="_blank" rel="noopener noreferrer">Creator</a></div>
            </div>
        </div >
    )
}
