import Sidebar from "../../components/sideBar/Sidebar";
import NavBar from "../../components/navBar/NavBar"
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar type="admin" />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="ministry" />
          <Widget type="department" />
          <Widget type="division" />
          <Widget type="Request"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Approved Request over 6 Mouths" aspect={2/1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Requests From Divisions</div>
          <List type="requests"/>
        </div>
      </div>
    </div>
  )
}

export default Home
