import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "Senior Business Consultant",
            company: "ABC Consulting Group",
            period: "2021 - Present",
            description: "Lead strategic initiatives for Fortune 500 clients, resulting in 25% average cost reduction and improved operational efficiency."
        },
        {
            title: "Business Analyst",
            company: "XYZ Corporation",
            period: "2019 - 2021",
            description: "Conducted market research and data analysis to support executive decision-making and business development."
        },
        {
            title: "Junior Consultant",
            company: "StartUp Solutions",
            period: "2018 - 2019",
            description: "Supported small business clients with process improvement and growth strategy development."
        }
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
