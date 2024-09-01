import React from "react";
import AppNavbar from "../navbar";
import Sidebar from "../Sidebar/Sidebar";

const ProtectedRoute = ({ children }) => {
  return (
    <div className="App">
        <div style={{ width: "100%" }}>
          <AppNavbar />
        </div>
        <Sidebar isOpen={true} />
        <div
          className={`content content-expanded`}
          style={{ marginTop: "-90px" }}
        >
          {children}
        </div>
      </div>
  );
};

export default ProtectedRoute;
