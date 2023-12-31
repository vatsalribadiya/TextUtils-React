import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Brightness from '../assets/brightness.png';

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.homeText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="">
            <img src={Brightness} alt="Dark" style={{width:"30px"}} onClick={props.toggleMode}/>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Site Title Here",
  aboutText: "About",
};