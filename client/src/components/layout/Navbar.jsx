import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/layout/navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import cookie from "js-cookie";
import { reset } from "../../slices/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Share2Play</Link>
        </div>
        {!user ? (
          <ul className="menu">
            <li>
              <Link to="/connexion">Connexion</Link>
            </li>
            <li>
              <Link to="/inscription">Inscription</Link>
            </li>
          </ul>
        ) : (
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              cookie.remove("token");
              dispatch(reset());
              navigate("/");
            }}
            onKeyDown={() => {
              cookie.remove("token");
              dispatch(reset());
              navigate("/");
            }}
            className="button__nav"
          >
            Deconnexion
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
