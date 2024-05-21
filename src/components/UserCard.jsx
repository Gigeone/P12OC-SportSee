import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.scss";
import PropTypes from "prop-types";

/**
 * Renders a user card component with the given profile information.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.avatarProfil - The URL of the user's avatar image.
 * @param {string} props.nameProfil - The name of the user.
 * @param {string} props.ageProfil - The age of the user.
 * @param {string} props.id - The ID of the user.
 * @return {JSX.Element} The rendered user card component.
 */
const UserCard = ({ avatarProfil, nameProfil, ageProfil, id }) => {
  return (
    <Link to={`/user/${id}`} className="cards-profil__profil">
      <img src={avatarProfil} alt={nameProfil} />
      <div className="name-profil-user">
        <span>{nameProfil}</span>
        <h3>{ageProfil} ans</h3>
      </div>
    </Link>
  );
};

export default UserCard;

UserCard.propTypes = {
  avatarProfil: PropTypes.string.isRequired,
  nameProfil: PropTypes.string.isRequired,
  ageProfil: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
