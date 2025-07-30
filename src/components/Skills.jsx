import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'Business Strategy', level: 95 },
        { name: 'Project Management', level: 90 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Team Leadership', level: 88 },
        { name: 'Client Relations', level: 92 },
        { name: 'Process Optimization', level: 87 }
    ];

    return (
        <section className="skills-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-header">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
