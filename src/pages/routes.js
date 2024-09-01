import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Search from "../components/Search";
import MyReports from "../components/MyReports";
import SavedCars from "../components/SavedCars";
import Decode from "../components/Decode";
import Tools from "../components/Tools";
import Dealer from "../components/Dealers";
import VehicleReport from "../components/VehicleReports";
import LandingPage from "./landing-page";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import ProtectedRoute from "../components/layout/protected-route";

export const routes = {
  myReports: "/dashboard/my-reports",
  savedCars: "/dashboard/saved-cars",
  decode: "/dashboard/decode",
  tools: "/dashboard/tools",
  dealers: "/dashboard/dealers",
  search: "/dashboard/search",
  vehicleReport: "/dashboard/vehicle-report",
  landingPage: "/",
  signup: '/signup',
  login: '/login'
};

const DasboardRoutes = () => {
  const token = localStorage.getItem("TOKEN");
  return (
    <Routes>
      {!token ?
        <>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.signup} element={<Signup />} />
        </>
        :
        <>
          <Route path={routes.search} element={<ProtectedRoute><Search /> </ProtectedRoute>} />
          <Route path={routes.myReports} element={<ProtectedRoute><MyReports /> </ProtectedRoute>} />
          <Route path={routes.savedCars} element={<ProtectedRoute><SavedCars /> </ProtectedRoute>} />
          <Route path={routes.decode} element={<ProtectedRoute><Decode /> </ProtectedRoute>} />
          <Route path={routes.tools} element={<ProtectedRoute><Tools /> </ProtectedRoute>} />
          <Route path={routes.dealers} element={<ProtectedRoute><Dealer /> </ProtectedRoute>} />
          <Route path={routes.vehicleReport} element={<ProtectedRoute><VehicleReport /> </ProtectedRoute>} />

          <Route path={routes.landingPage} element={<ProtectedRoute><LandingPage /> </ProtectedRoute>} /></>
      }
      <Route
        path="*"
        element={<Navigate to={token ? routes.search : routes.login} />}
      />
    </Routes>
  );
};

export default DasboardRoutes;
