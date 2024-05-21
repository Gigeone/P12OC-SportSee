import React from "react";
import logo from "../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";

/**
 * Renders the header component with the logo and navigation links.
 *
 * @return {JSX.Element} The rendered header component.
 */
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="SportSee Logo" />

      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Accueil
            </Link>
          </li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
