import React from 'react';

import { Navbar, About } from './container';
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