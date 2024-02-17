import React from 'react';

// import { Navbar, About } from './container';
import Navbar from './container/Navbar/Navbar';
import About from './container/About/About';

const App = () => {
    return (
        <div>
            <Navbar />
            <About />
        </div>
    );
};

export default App;