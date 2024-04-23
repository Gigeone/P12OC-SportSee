import "./App.scss";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <SideBar />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
