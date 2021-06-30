import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.scss";

import {
  menus1,
  menusInner,
  menus2,
  Icons
} from "../data"

function Sidebar({ showIcon }) {

  const [showDropDown, setShowDropDown] = useState(false)

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-img mr-4">
          <img src={Icons.logo} alt="admoni logo" />
        </div>
        {!showIcon && 'ADMONI'}
      </div>
      <div className="sidebar-menu">
        <div className="d-flex sidebar-menu-name px-3 my-4 justify-content-between align-items-center">
          {!showIcon && 'Super Admin'}
          <div className="d-flex  align-items-center">
            <Link to="/app/admin">
              <img src={Icons.AddUsers} alt="plus" className="btn p-0 mr-1" />
            </Link>
            <Link to="/app/admin/add">
              <img src={Icons.PlusGreen} alt="plus" className="btn p-0" />
            </Link>
          </div>
        </div>
        <ul>
          {menus1.map((menu, index) => (
            <li>
              <NavLink
                to={menu.route}
                activeClassName="selected"
                className="sidebar-menu-link"
                key={menu.title}
              >
                <div className="sidebar-menu-link-img mr-4">
                  <img src={menu.icon} alt="admoni logo" />
                </div>{' '}
                {!showIcon && (
                  <div className="sidebar-menu-link-title">{menu.title}</div>
                )}
              </NavLink>
            </li>
          ))}
          <li>
            <div
              className="sidebar-menu-link"
              onClick={() => setShowDropDown(!showDropDown)}
            >
              <div className="sidebar-menu-link-img mr-4">
                <img src={Icons.Business} alt="admoni logo" />
              </div>
              {!showIcon && (
                <div className="sidebar-menu-link-title">
                  <span className="mr-5 pr-3">Business</span>
                  <img
                    src={Icons.CheveronDown}
                    alt="admoni logo"
                    className="ml-auto"
                  />
                </div>
              )}
            </div>
            {showDropDown && (
              <ol className="">
                {menusInner.map((menu, index) => (
                  <li>
                    <NavLink
                      to={menu.route}
                      activeClassName="selected-inner"
                      className="sidebar-menu-link-inner"
                      key={menu.title + index}
                    >
                      <div className="sidebar-menu-link-img mr-4">
                        <img src={menu.icon} alt="admoni logo" />
                      </div>{' '}
                      {!showIcon && (
                        <div className="sidebar-menu-link-title">
                          {menu.title}
                        </div>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ol>
            )}
          </li>

          {menus2.map((menu, index) => (
            <li>
              <NavLink
                to={menu.route}
                activeClassName="selected"
                className="sidebar-menu-link"
                key={menu.title + index}
              >
                <div className="sidebar-menu-link-img mr-4">
                  <img src={menu.icon} alt="admoni logo" />
                </div>{' '}
                {!showIcon && (
                  <div className="sidebar-menu-link-title">{menu.title}</div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="sidebar-menu-logout">
          <div className="sidebar-menu-link-img mr-4">
            <img src={Icons.Logout} alt="admoni logo" />
          </div>{' '}
          {!showIcon && 'Logout'}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
