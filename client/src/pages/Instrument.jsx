import React from "react";
import useForm from "../hooks/useForm";
import instrumentCreateValidate from "../utils/formValidate/instrumentCreateValidate";
import { useSelector } from "react-redux";
import { create } from "../services/instrumentService";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  name: "",
  type: "",
  description: "",
  image: "",
};

function Instrument() {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, errors } = useForm(
    INITIAL_STATE,
    instrumentCreateValidate
  );

  const user = useSelector((state) => state.user);

  const onSubmit = (value) => {
    create(value, user.userId).then((res) => {
      if (res.data) {
        navigate("/");
      }
    });
  };

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
          <label htmlFor="description">Description de l'instrument</label>
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
