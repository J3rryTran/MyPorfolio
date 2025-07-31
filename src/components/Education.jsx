import React from 'react';

const Education = () => {
    const education = [
        {
            title: "Bachelor of Data Science",
            institution: "University of Technology and Science in Hanoi",
            period: "2020 - 2024",
        },
        {
            title: "High School Diploma",
            institution: "Doan Thi Diem High School",
            period: "2017 - 2020",
        },
        {
            title: "Certifications",
            institution:
                "DeepLearning.AI Machine Learning Specialization \n" +
                "DeepLearning.AI Deep Learning Specialization \n" +
                "Google IT Automation with Python Professional Certificate\n" +
                "Google Data Analytics Professional",
        },
        {
            title: "Language Proficiency:",
            institution: "English (B1), Vietnamese (Native)"
        }
    ];
    return (
        <section className="education-section">
            <h2>Education</h2>
            <div className="education-list">
                {education.split("\n").map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3>{edu.title}</h3>
                        <h4>{edu.institution}</h4>
                        <span className="period">{edu.period}</span>
                        <p>{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Education;