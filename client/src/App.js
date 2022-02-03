import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Instrument from "./pages/Instrument";
import Accueil from "./pages/Accueil";
import "./assets/index.scss";
import { useEffect } from "react";
import cookie from "js-cookie";
import { decodeToken } from "react-jwt";
import { useDispatch } from "react-redux";
import { set } from "./slices/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = cookie.get("token");
    dispatch(set(decodeToken(token)));
  }, [dispatch]);

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
