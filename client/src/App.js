import {Routes, Route} from "react-router-dom";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
