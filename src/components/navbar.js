import { Button, message } from "antd";
import React from "react";
import { Navbar } from "react-bootstrap";

function AppNavbar() {
  const token = localStorage.getItem("TOKEN");

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    message.success('Logged Out Successfully.')
    window.location.href = "http://localhost:3000/login";
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
        {token && (
          <Button style={{ margin: "0px 20px" }}  onClick={handleLogout} >
          Logout
        </Button>
        )}
          
        
      </div>
    </Navbar>
  );
}

export default AppNavbar;
