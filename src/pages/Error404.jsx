import React from "react";
import { Link } from "react-router-dom";
import "./Error404.scss";

/**
 * Renders the Error404 component.
 *
 * @return {JSX.Element} The rendered Error404 component.
 */
const Error404 = () => {
  return (
    <main className="error-content">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="btn-home">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default Error404;
