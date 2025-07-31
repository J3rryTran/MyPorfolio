import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "VAST: Mydio user data management system",
            company: "Viettel Software (VTIT)",
            period: "05/2025 - Present",
            description: "Join in developing and operating the data system for the MyDio.vn audiobook platform, where users can listen and read books online." +
                " The system is built on a microservices architecture, utilizing technologies such as Java, Spring Boot, and PostgreSQL. My role involves designing and implementing data models, optimizing database queries, and ensuring data integrity and security. I also collaborate with cross-functional teams to integrate new features and improve system performance.",
        },

    ];

    return (
        <section className="experience-section">
            <h2>Work Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <span className="period">{exp.period}</span>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
