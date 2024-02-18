import React from 'react';

import { Navbar, About, Header } from './container';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
        </div>
    );
};

export default App;