import "./Dashboard.scss";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import MainPage from "../components/Content";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <SideBar />
        <MainPage />
      </div>
    </div>
  );
};

export default Dashboard;
