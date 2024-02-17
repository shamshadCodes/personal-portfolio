import React from 'react';

// import { Navbar, About } from './container';
import Navbar from './container/Navbar/Navbar';
import About from './container/About/About';

import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <About />
        </div>
    );
};

export default App;