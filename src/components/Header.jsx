import React from 'react';

const Header = () => {
    return (
        <header className="header-section">
            <div className="hero-content">
                <div className="profile-image">
                    <img src="/api/placeholder/200/200" alt="Profile" />
                </div>
                <h1 className="name">Trần Minh Trung</h1>
                <h2 className="title">Business Professional | Consultant</h2>
                <p className="tagline">Innovative problem solver with expertise in business strategy</p>
                <div className="contact-info">
                    <span>📧 trantrung20023@example.com</span>
                    <span>📱 +1 (555) 123-4567</span>
                    <span>📍 Hanoi, Vietnam</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
