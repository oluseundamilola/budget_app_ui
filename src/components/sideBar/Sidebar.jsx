import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
// import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { Link } from "react-router-dom";

const Sidebar = ({ type }) => {
  return (
    <>
      {type === "user" && (
        <div className="sidebar">
          <div className="top">
            <Link to="/ministry_info" style={{ textDecoration: "none" }}>
              <span className="logo">damiadmin</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              <p className="title">MAIN</p>
                <li style={{cursor: "not-allowed"}}>
                  <DashboardIcon className="icon" />
                  <span>Dashboard</span>
                </li>
              <p className="title">LIST</p>
              <Link to="/ministry_info" style={{ textDecoration: "none" }}>
                <li>
                  <PeopleOutlineIcon className="icon" />
                  <span>Ministry Info</span>
                </li>
              </Link>
              <li>
                <PointOfSaleIcon className="icon" />
                <span>Send Requests</span>
              </li>
              <li>
                <LocalShippingIcon className="icon" />
                <span>View Requests</span>
              </li>
              <li>
                <NotificationsIcon className="icon" />
                <span>Create Department</span>
              </li>
              <li>
                <NotificationsIcon className="icon" />
                <span>Create Division</span>
              </li>
              <p className="title">USEFUL</p>
              <li>
                <EqualizerIcon className="icon" />
                <span>Logs</span>
              </li>
              <li>
                <SettingsIcon className="icon" />
                <span>Settings</span>
              </li>
              <p className="title">USER</p>
              <li>
                <AccountCircleIcon className="icon" />
                <span>Ministry</span>
              </li>
              <li>
                <LogoutIcon className="icon" />
                <span>LogOut</span>
              </li>
            </ul>
          </div>
          <div className="buttom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
          </div>
        </div>
      )}


{type === "admin" && (
        <div className="sidebar">
          <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">damiadmin</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              <p className="title">MAIN</p>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <DashboardIcon className="icon" />
                  <span>Dashboard</span>
                </li>
              </Link>
              <p className="title">LIST</p>
              <Link to="/ministry" style={{ textDecoration: "none" }}>
                <li>
                  <PeopleOutlineIcon className="icon" />
                  <span>Ministries</span>
                </li>
              </Link>
              <li>
                <NotificationsIcon className="icon" />
                <span>Requests</span>
              </li>
              <li>
                <PointOfSaleIcon className="icon" />
                <span>Approved Requests</span>
              </li>
              <li>
                <LocalShippingIcon className="icon" />
                <span>Pending Requests</span>
              </li>
              <li>
                <NotificationsIcon className="icon" />
                <span>Declined Requests</span>
              </li>
              <p className="title">USEFUL</p>
              <li>
                <EqualizerIcon className="icon" />
                <span>Logs</span>
              </li>
              <li>
                <SettingsIcon className="icon" />
                <span>Settings</span>
              </li>
              <p className="title">USER</p>
              <li>
                <AccountCircleIcon className="icon" />
                <span>Admin</span>
              </li>
              <li>
                <LogoutIcon className="icon" />
                <span>LogOut</span>
              </li>
            </ul>
          </div>
          <div className="buttom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
