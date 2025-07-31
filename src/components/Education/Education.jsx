import React from 'react';
import './Education.css'; // nhớ import file CSS nếu tách riêng

const Education = () => {
    const education = [
        {
            title: "Bachelor of Data Science",
            institution: "University of Technology and Science in Hanoi - USTH (2020 - 2024)",
        },
        {
            title: "High School Diploma",
            institution: "Doan Thi Diem High School (2017 - 2020)",
        },
        {
            title: "Certifications",
            institution:
                "DeepLearning.AI Machine Learning Specialization\n" +
                "DeepLearning.AI Deep Learning Specialization\n" +
                "Google IT Automation with Python Professional Certificate\n" +
                "Google Data Analytics Professional",
        },
        {
            title: "Language Proficiency:",
            institution: "English (B1), Vietnamese (Native)",
        },
    ];

    return (
        <section className="education-section">
            <h2>Education</h2>
            <div className="education-list">
                {education.map((edu, index) => (
                    <div key={index} className="education-item">
                        {edu.title === "Certifications" ? (
                            <>
                                <h3>{edu.title}</h3>
                                <h4>
                                    {edu.institution.split('\n').map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </h4>
                            </>
                        ) : edu.title === "Language Proficiency:" ? (
                            <p>
                                <strong>{edu.title}</strong> {edu.institution}
                            </p>
                        ) : (
                            <>
                                <h3>{edu.title}</h3>
                                <div className="institution-line">
                                    <span className="institution">{edu.institution}</span>
                                    <span className="period">{edu.period}</span>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
