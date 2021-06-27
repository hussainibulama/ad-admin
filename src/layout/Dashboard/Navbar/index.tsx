import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Icons } from "../data"

function Navbar({ showIcon, setShowIcon }) {


  const handleToggle = () => {
    setShowIcon(!showIcon)
  }

  return (
    <div className="dashboard-navbar">
      <div className="dashboard-navbar-left">
        <div className="dashboard-navbar-left-img">
          <img src={Icons.ToggleMenu} alt="" onClick={handleToggle} className="btn" />
        </div>
        <div className="dashboard-navbar-left-text">
          <div className="dashboard-navbar-left-text-title">
            Dashboard
          </div>
          <div className="dashboard-navbar-left-text-text">
            Admoni Super Admin Dashboard
          </div>
        </div>

      </div>
      <div className="dashboard-navbar-right">
        <div className="dashboard-navbar-right-search">
          <input type="text" placeholder="Search" />
          <div className="dashboard-navbar-right-img">
            <img src={Icons.Search} alt="" className="btn" />
          </div>
        </div>
        <Link to="/app/notifications" className="dashboard-navbar-right-img mr-4">
          <img src={Icons.NavNotification} alt="notifications" className="btn" />
        </Link>
        <Link to="/app/chats" className="dashboard-navbar-right-img mr-4">
          <img src={Icons.Chat} alt="" className="btn" />
        </Link>
        <Link to="/app/errors" className="dashboard-navbar-right-img mr-5">
          <img src={Icons.Error} alt="" className="btn" />
        </Link>
      </div>

    </div>
  );
}

export default Navbar;
