import React, { useState, useEffect } from 'react';
import Image from '../assets/image.png';
import '../styles/Navbar.css';

const Navbar = () => {
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowHamburger(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="Navbar">
            <img src={Image} alt="Logo" />
            <p>LOREM, IPSUM</p>
            {showHamburger && (
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
        </div>
    );
};

export default Navbar;
