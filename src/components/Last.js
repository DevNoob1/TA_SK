import React, { useState, useEffect } from 'react';
import Image from '../assets/group.jpg';
import '../styles/Last.css';

// Last component with scroll-based animations
const Last = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY - 700);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className={`section apple-section ${scrollY > window.innerHeight ? 'scrolled' : ''}`}>
                <div className="content">
                    <h3 style={{ fontSize: '15px', fontWeight: '200' }}>LOREM OF</h3>
                    <h1 style={{ fontSize: '22px', fontWeight: '200' }}>LOREM<i> of </i> &nbsp;IPSUM</h1>
                    <p>
                        A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
                        A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
                        <br /><br />
                        A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
                        A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
                    </p>
                </div>
                <div className="image-container">
                    <img src={Image} alt="Apple" />
                    <button className={`lorem-button ${scrollY > window.innerHeight ? 'visible' : ''}`}>
                        Lorem Lorem
                    </button>
                </div>
            </div>

            <div className={`section mango-section ${scrollY > 400 ? 'visible' : ''}`}>
                <h1 style={{ marginTop: '3px' }}>Lorem <br />In <br />Ipsum</h1>
                <div style={{ height: '90px', width: '1px', background: 'white' }}></div>
                <p style={{ marginTop: '2px' }}>Lorem lorem <br />Ipsum Ipsum <br />Lorem lorem <br />Ipsum Ipsum</p>
            </div>
        </div>
    );
};

export default Last;
