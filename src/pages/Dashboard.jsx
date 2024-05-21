import "./Dashboard.scss";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

/**
 * Renders the Dashboard component.
 *
 * @return {JSX.Element} The rendered Dashboard component.
 */
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
