import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);
    
    return (
        <>
        {/* Desktop Navbar */}
        <nav id="desktop-navbar">
            <div className='logo'>Petar Atanasov</div>
            <ul className='nav-links'>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        {/* Mobile Navbar */}
        <nav id="hamburger-nav">
            <div className='logo'>Petar Atanasov</div>

            <div className="hamburger-menu">
                <div
                    className={`hamburger-icon ${open ? 'open' : ''}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`menu-links ${open ? 'open' : ''}`}>
                    <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                    <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
                    <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
    );
}
export default Navbar;