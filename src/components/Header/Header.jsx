import React from 'react';
import './Header.css';
import avata from './avata.jpg';

const Header = () => {
    return (
        <header className="header-section">
            <div className="hero-content">
                <div className="profile-image">
                    <img src={avata} alt="Profile" />
                </div>
                <h1 className="name">Trần Minh Trung</h1>
            </div>
        </header>
    );
};

export default Header;
