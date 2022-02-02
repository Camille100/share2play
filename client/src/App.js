import {Routes, Route} from "react-router-dom";
import Connexion from "./pages/Connexion";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </div>
  );
}

export default App;
