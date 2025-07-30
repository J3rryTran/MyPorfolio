import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './App.css';

function App() {
    return (
        <div className="portfolio-container">
            <Header />
            <main className="main-content">
                <About />
                <Skills />
                <Experience />
            </main>
        </div>
    );
}

export default App;
