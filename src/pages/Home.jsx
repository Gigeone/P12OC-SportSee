import React, { useContext } from "react";
import UserCard from "../components/UserCard";
import Man from "../assets/man.jpg";
import Woman from "../assets/woman.jpg";
import { SourceContext } from "../services/context";
import "./Home.scss";

const Home = () => {
  const { source, toggleSource, isApiSource } = useContext(SourceContext);
  console.log(source, toggleSource, isApiSource);

  return (
    <main className="connexion-profil">
      <h2 className="connexion-profil__title">Veuillez vous identifier</h2>
      <button className="switch-datas" onClick={toggleSource}>
        {isApiSource ? "Switch to Mock Data" : "Switch to API Data"}
      </button>
      <div className="cards-profil">
        <UserCard
          avatarProfil={Man}
          nameProfil="Karl Dovineau"
          ageProfil="31"
          id="12"
        />
        <UserCard
          avatarProfil={Woman}
          nameProfil="Cecilia Ratorez"
          ageProfil="34"
          id="18"
        />
        {/* <UserCard
          avatarProfil={Woman}
          nameProfil="Mock user"
          ageProfil="27"
          id="20"
        /> */}
      </div>
    </main>
  );
};

export default Home;
