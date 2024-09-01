import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import AppNavbar from "./components/navbar";
import AppRoutes from "./pages/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ width: "100%" }}>
          <AppNavbar />
        </div>
        <Sidebar isOpen={true} />
        <div
          className={`content content-expanded`}
          style={{ marginTop: "-90px" }}
        >
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
