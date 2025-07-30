import React from 'react';

const About = () => {
    return (
        <section className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <p>
                    Experienced business consultant with over 5 years of expertise in helping
                    companies optimize their operations and achieve sustainable growth. Known for
                    strategic thinking, analytical problem-solving, and collaborative leadership.
                </p>
                <div className="highlights">
                    <div className="highlight-item">
                        <h3>5+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="highlight-item">
                        <h3>50+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="highlight-item">
                        <h3>20+</h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
