import React, { useEffect } from 'react';
import Home from './components/Home';
import Information from './components/Information';
import Move from './components/Move';
import Gallery from './components/Gallery';
import Place from './components/Place';
import Family from './components/Family';
import Account from './components/Account';
import Footer from './components/Footer';

import './App.css';

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <Home />
            <Family />
            <Information />
            <Move />
            <Gallery />
            <Account />
            <Place />
            <Footer />
        </div>
    );
}

export default App;
