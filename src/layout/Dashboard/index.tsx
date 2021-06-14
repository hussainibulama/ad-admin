import React, { useState } from "react";
import "./index.scss";
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


function DashboardLayout(props) {
  const [showIcon, setShowIcon] = useState(false)
  return (
    <div className="dashboard-layout">

      <Sidebar showIcon={showIcon} />

      <div className="dashboard-layout-main">

        <Navbar showIcon={showIcon} setShowIcon={setShowIcon} />

        <div className="dashboard-layout-main-body">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
