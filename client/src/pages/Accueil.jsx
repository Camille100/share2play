import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/layout/accueil.scss';
import homePicture from '../assets/img/home-picture.jpg';

function Accueil() {
    return (
        <div className="Accueil">
            <div className="presentation-container">
                <div className="text-presentation">
                    <h2>Rejoignez notre orchestre!</h2>
                    <p>
                        Echangez et profitez d'instruments près de chez vous en
                        toute simplicité
                    </p>
                    <button>
                        <Link to="/instrument">C'est parti!</Link>
                    </button>
                </div>

                <div className="image">
                    <img src={homePicture} alt="picture of a piano" />
                </div>
            </div>
        </div>
    );
}

export default Accueil;
