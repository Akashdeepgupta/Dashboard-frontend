import React from "react";
import { Image, Nav } from "react-bootstrap";
import "./navbar.css";
import Edviron_logo from "../../assests/Edviron_logo.svg";
import Dashboard_dot from "../../assests/dashboard_dot.svg";
import User from "../../assests/user.png";
import Project from "../../assests/projects.png";
import Sales from "../../assests/sales.png";
import Setting from "../../assests/setting.png";
import Logout from "../../assests/logout.png";
import {NavLink} from "react-router-dom";

function Sidebar({children}) {


  return (
    <div className="d-flex  flex-wrap flex-row">
      <Nav className="container  d-flex d-inline-flex flex-column flex-wrap  align-content-center justify-content-start m-2 border border-dark rounded-top">
        <Nav.Item className="flex-item item-1 ">
          <NavLink to="/dashboard" className="">
            <Image src={Edviron_logo} />
          </NavLink>
        </Nav.Item>
        <Nav.Item className="d-inline-flex flex-column flex-item item-2 gap-2">
          <NavLink
            to="/dashboard"
            className="link flex-grow-1"
            id="dashboard_text"
            activeClassName="active"
          >
            <div className="d-flex flex-row" >
              <div className="flex-grow-0 ">
                <div className="icon-d">
                  <Image src={Dashboard_dot} />
                  <Image src={Dashboard_dot} />
                </div>
                <div className="icon-d">
                  <Image src={Dashboard_dot} />
                  <Image src={Dashboard_dot} />
                </div>
              </div>
              <div className="m-2">Dashboard</div>
            </div>
          </NavLink>
          <div>
            <NavLink className="link" to="/users"
             activeClassName="active"
              >
              <div className="d-flex flex-row" style={{ marginLeft: "18px" }} >
                <div >
                  <Image
                    src={User}
                    height="20px"
                    style={{ marginTop: "8px" }}
                  />
                </div>
                <div className="m-2 ">Users</div>
              </div>
            </NavLink>

            <NavLink className="link" to="/projects"
             activeClassName="active"
             >
              <div className="d-flex flex-row" style={{ marginLeft: "18px" }}>
                <div>
                  <Image
                    src={Project}
                    height="20px"
                    style={{ marginTop: "8px" }}
                  />
                </div>
                <div className="m-2">Projects</div>
              </div>
            </NavLink>

            <NavLink className="link" to="/sales"
             activeClassName="active"
             >
              <div className="d-flex flex-row" style={{ marginLeft: "18px" }}>
                <div>
                  <Image
                    src={Sales}
                    height="20px"
                    style={{ marginTop: "8px" }}
                  />
                </div>
                <div className="m-2">Sales</div>
              </div>
            </NavLink>
          </div>
        </Nav.Item>

        <Nav.Item className="flex-item item-3">
          <NavLink className="link" to="/settings"
           activeClassName="active"
          >
            <div className="d-flex flex-row" style={{ marginLeft: "18px" }}>
              <div>
                <Image
                  src={Setting}
                  height="20px"
                  style={{ marginTop: "8px" }}
                />
              </div>
              <div className="m-2">Setting</div>
            </div>
          </NavLink>

          <NavLink
            className="link"
            to="#"
            id="logout_text"
            style={{ color: "#A65959" }}
          >
            <div className="d-flex flex-row" style={{ marginLeft: "18px" }}>
              <div>
                <Image
                  src={Logout}
                  height="20px"
                  style={{ marginTop: "8px" }}
                />
              </div>
              <div className="m-2">Logout</div>
            </div>
          </NavLink>
        </Nav.Item>
      </Nav>
      <main className="child">{children}</main>
    </div>
  );
}

export default Sidebar;

