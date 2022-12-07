import Home from './components/Home';
import Information from './components/Information';
import Gallery from './components/Gallery';
import Place from './components/Place';
import Account from './components/Account';

import './App.css';

function App() {
    return (
        <div className="container">
            <Home />
            <Information />
            <Gallery />
            <Account />
            <Place />
        </div>
    );
}

export default App;
