import React from "react";
import "./Sidebar.css";
import {
  FaSearch,
  FaFileAlt,
  FaHeart,
  FaCog,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// Adjust the import path according to where your logo is located
import Logo from "../images/logo2.png"; // Assuming logo2.png is in the same directory as Sidebar.js
import { routes } from "../../pages/routes";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img
          src={Logo}
          alt="Logo"
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(routes.landingPage)}
        />
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to={routes.search}>
            <FaSearch /> <span className="side_texts">Search</span>
          </Link>
        </li>
        <li>
          <Link to={routes.myReports}>
            <FaFileAlt />
            <span className="side_texts">My Reports</span>
          </Link>
        </li>
        <li>
          <Link to={routes.savedCars}>
            <FaHeart />
            <span className="side_texts">Saved Cars</span>
          </Link>
        </li>
        <li>
          <Link to={routes.decode}>
            <FaCog /> <span className="side_texts">Decode</span>
          </Link>
        </li>
        <li>
          <Link to={routes.tools}>
            <FaTools /> <span className="side_texts">Tools</span>
          </Link>
        </li>
        <li>
          <Link to={routes.dealers}>
            <FaUsers />
            <span className="side_texts">Dealers</span>
          </Link>
        </li>
        <p>
          {" "}
          <span className="order_texts">Order Credits</span>
        </p>
        <li>
          <Link to={routes.vehicleReport}>
            <FaFileAlt /> <span className="side_texts">Vehicle Report</span>
          </Link>
        </li>
        <li>
          <Link to={routes.vehicleReport}>
            <FaFileAlt /> <span className="side_texts">Vehicle Report</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
