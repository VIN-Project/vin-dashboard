import React from "react";
import {Button, Navbar } from "react-bootstrap";


function AppNavbar() {
  const token = localStorage.getItem("TOKEN");

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    window.location.href = "http://localhost:3001";
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      style={{ marginLeft: "250px", minHeight: "100px", maxHeight: "100px" }}
    >
      <div
        style={{
          width: "100%",
          padding: "0px 30px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >

        <div>.</div>
        <span>.</span>
        
          <Button style={{ margin: "0px 20px" }}  onClick={handleLogout} >
            Logout
          </Button>
        
      </div>
    </Navbar>
  );
}

export default AppNavbar;
