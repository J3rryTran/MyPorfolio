import React from 'react';

const Header = () => {
    return (
        <header className="header-section">
            <div className="hero-content">
                <div className="profile-image">
                    <img src="/public/asset/img/" alt="Profile" />
                </div>
                <h1 className="name">Trần Minh Trung</h1>
                <div className="contact-info">
                    <span>📧 trantrung20023@example.com</span>
                    <span>📱 +84 985 686 169</span>
                    <span>📍 Hanoi, Vietnam</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
