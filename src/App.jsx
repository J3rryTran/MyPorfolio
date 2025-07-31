import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import './App.css';

function App() {
    return (
        <div className="portfolio-container">
            <Header />
            <main className="main-content">
                <About />
                <Education />
                <Experience />
            </main>
        </div>
    );
}

export default App;
