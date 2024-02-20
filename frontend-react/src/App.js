import React from 'react';

import { Navbar, About, Header, Work, Skills, Testimonials, Footer } from './container';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default App;