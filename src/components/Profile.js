import React, { useEffect, useState } from 'react';
import '../styles/Profile.css';
import womanPic from '../assets/woman.jpg';

const Profile = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY - 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="scrollable-container" className="profile-container">
            <img
                src={womanPic}
                alt="Woman"
                className="profile-picture-woman"
                style={{
                    bottom: `${Math.max(scrollY / 2, 200)}px`,
                    left: '25%',
                    transform: `scale(${1 + scrollY / 500})`,
                }}
            />
            <div className={`text-container ${scrollY > 300 ? 'scrolled' : ''}`}>
                <p>LOREM INTO IPSUM</p>
                <p>A LOREM in the IPSUM</p>
            </div>
            <div className={`section mango-section ${scrollY > 400 ? 'visible' : ''}`}>
                <h1 style={{ marginTop: '3px' }}>Lorem <br />In <br />Ipsum</h1>
                <div style={{ height: '90px', width: '1px', background: 'white' }}></div>
                <p style={{ marginTop: '2px' }}>Lorem lorem <br />Ipsum Ipsum <br />Lorem lorem <br />Ipsum Ipsum</p>
            </div>
        </div>
    );
};

export default Profile;
