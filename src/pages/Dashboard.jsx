import "./Dashboard.scss";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
