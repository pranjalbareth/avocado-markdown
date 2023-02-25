import React from 'react';
import './NavBar.css';
import { MoonOutline, SunOutline } from "@styled-icons/evaicons-outline";
import { useTheme } from "../../contexts/theme-context";

export default function NavBar() {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <div className={`NavBar ${theme}-mode`}>
            <div className='NavBar_title'>
                <div className='Navbar_title_logo'>🥑 Avocado Markdown</div>
            </div>
            <div className='NavBar_items'>
                <div className='Navbar_title_contribute'><a href={'https://github.com/pranjalbareth/avocado-markdown'} target="_blank" rel="noopener noreferrer">Contribute</a></div>
                <div className='Navbar_title_creator'><a href={'https://twitter.com/pranjalbareth'} target="_blank" rel="noopener noreferrer">Creator</a></div>
                {/* <button className='Navbar_title_visualMode'
                    onClick={() =>
                        setTheme((prev) => (prev === "light" ? "dark" : "light"))
                    }
                >
                    {theme === "light" ? <MoonOutline fill='white' /> : <SunOutline fill='white' />}
                </button> */}
                <button className='Navbar_title_visualMode' onClick={toggleTheme}>
                    {theme === "light" ? <MoonOutline fill='626262' /> : <SunOutline fill='white' />}
                </button>
            </div>
        </div >
    )
}
