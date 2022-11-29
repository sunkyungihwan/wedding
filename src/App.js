import Home from './components/Home';
import Gallery from './components/Gallery';
import Place from './components/Place';
import Account from './components/Account';

import './App.css';

function App() {
    return (
        <div className="container">
            <Home />
            <Gallery />
            <Account />
            <Place />
        </div>
    );
}

export default App;
