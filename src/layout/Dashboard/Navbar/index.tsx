import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Icons } from '../data';
import SearchInput from '../../../components/SearchInput/search-input.';

function Navbar({ showIcon, setShowIcon }) {
  const handleToggle = () => {
    setShowIcon(!showIcon);
  };

  return (
    <div className="dashboard-navbar row justify-content-between">
      <div className="dashboard-navbar-left d-flex  col">
        <div className="dashboard-navbar-left-img">
          <img
            src={Icons.ToggleMenu}
            alt=""
            onClick={handleToggle}
            className="btn"
          />
        </div>
        <div className="dashboard-navbar-left-text">
          <div className="dashboard-navbar-left-text-title">Dashboard</div>
          <div className="dashboard-navbar-left-text-text">
            Admoni Super Admin Dashboard
          </div>
        </div>
      </div>
      <div className="dashboard-navbar-right col d-flex align-items-center justify-content-between ">
        <div className="dashboard-navbar-right-search mr-4 ">
          <SearchInput />
        </div>
        <Link to="/app/notifications" className=" mr-4 icon">
          <img src={Icons.NavNotification} alt="notifications" />
        </Link>
        <Link to="/app/chats" className="icon mr-4">
          <img src={Icons.Chat} alt="" />
        </Link>
        <Link to="/app/errors" className="icon mr-5">
          <img src={Icons.Error} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
