import React from 'react';
import useForm from '../hooks/useForm';

function Instrument() {
    return (
        <div className="Instrument">
            <h1>J'enregistre mon instrument</h1>
            <form>
                <div className="box-input">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" required="required" />
                    <div className="box-errors"></div>
                </div>
                <div className="box-input">
                    <label htmlFor="type">Catégorie de l'instrument</label>
                    <input type="text" name="type" required="required" />
                    <div className="box-errors"></div>
                </div>

                <div className="box-input instrument-img">
                    <label htmlFor="image">Image de l'instrument</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/png, image/jpeg"
                        required="required"
                    />
                    <div className="box-errors"></div>
                </div>

                <div className="box-input">
                    <label htmlFor="description">
                        Description de l'instrument
                    </label>
                    <textarea
                        name="description"
                        placeholder="Description..."
                        rows="5"
                        cols="33"
                        required="required"
                    />
                    <div className="box-errors"></div>
                </div>

                <input
                    type="submit"
                    value="Envoyer"
                    className="instrument-registration-button"
                />
            </form>
        </div>
    );
}

export default Instrument;
