import React from 'react';

import { Navbar, About, Header, Work } from './container';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
        </div>
    );
};

export default App;