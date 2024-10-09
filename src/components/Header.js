import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';
import backgroundVideo from '../assets/-5ae6-4adb-81b4-c2d194c6ef4c.mp4';
import profilePic from '../assets/woman.jpg';
import { FaCalendarAlt, FaPhone } from 'react-icons/fa';
import { WiDayRain } from 'react-icons/wi';

// Header component with scroll-based UI changes
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="Header">
            <video className="background-video" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="overlay">
                <Navbar />
                <div className="centered-text">
                    <h1>
                        <span style={{ marginLeft: '-50px' }}>A LOREM IPSUM</span> <br />
                        <span style={{ marginLeft: '50px' }}>in LOREM IPSUM</span>
                    </h1>
                </div>
                <div className="profile-section">
                    <img src={profilePic} alt="Profile" className="profile-picture" />
                    <div className="profile-text">
                        <p className="small-font">lorem by</p>
                        <p className="large-font">Lorem & Ipsum lorem</p>
                    </div>
                </div>
                <div className="button-section">
                    <button className={`contact-button ${isScrolled ? 'scrolled' : ''}`}>
                        <span><FaCalendarAlt className="icon" /></span>
                        <div className="line"></div>
                        <span><FaPhone className="icon" /></span>
                    </button>
                </div>
                <div className="info-section">
                    <p className="small-number">25 <WiDayRain className="cloud-icon" /> lorem</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
