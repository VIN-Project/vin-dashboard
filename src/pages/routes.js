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

export const routes = {
  search: "/dashboard/search",
  myReports: "/dashboard/my-reports",
  savedCars: "/dashboard/saved-cars",
  decode: "/dashboard/decode",
  tools: "/dashboard/tools",
  dealers: "/dashboard/dealers",
  search: "/dashboard/search",
  vehicleReport: "/dashboard/vehicle-report",
  landingPage: "/",
};

const DasboardRoutes = () => {
  return (
    <Routes>
      <Route path={routes.search} element={<Search />} />
      <Route path={routes.myReports} element={<MyReports />} />
      <Route path={routes.savedCars} element={<SavedCars />} />
      <Route path={routes.decode} element={<Decode />} />
      <Route path={routes.tools} element={<Tools />} />
      <Route path={routes.dealers} element={<Dealer />} />
      <Route path={routes.vehicleReport} element={<VehicleReport />} />

      <Route path={routes.landingPage} element={<LandingPage />} />

      <Route path="*" element={<Navigate to={routes.landingPage} />} />
    </Routes>
  );
};

export default DasboardRoutes;
