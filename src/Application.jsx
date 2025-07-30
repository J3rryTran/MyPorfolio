import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './Application.css';

function Application() {
    return (
        <div className="portfolio-container">
            <Header />
            <main className="main-content">
                <About />
                <Skills />
                <Experience />
                <Education />
                <Contact />
            </main>
        </div>
    );
}

export default Application;
