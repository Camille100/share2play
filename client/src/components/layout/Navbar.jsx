import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/layout/navbar.scss';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/">Share2Play</Link>
                </div>
                <ul className="menu">
                    <li>
                        <Link to="/connexion">Connexion</Link>
                    </li>
                    <li>
                        <Link to="/inscription">Inscription</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
