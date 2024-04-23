import React from "react";
import logo from "../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="SportSee Logo" />

      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
