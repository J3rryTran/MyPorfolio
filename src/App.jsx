import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
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
