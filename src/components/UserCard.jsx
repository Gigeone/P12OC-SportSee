import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.scss";

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
