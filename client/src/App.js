import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Instrument from './pages/Instrument';
import Accueil from './pages/Accueil';
import './assets/index.scss';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes className="wrapper">
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/instrument" element={<Instrument />} />
                <Route path="/" element={<Accueil />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
