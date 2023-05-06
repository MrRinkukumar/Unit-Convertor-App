import React from "react";
import { Routes } from "react-router-dom";
import { AboutRoute } from "../pages/About/AboutRoute";
import { HomeRoute } from "../pages/Home/HomeRoute";

class AppRoutes extends React.Component {
  render() {
    return (
      <>
        <Routes>{AboutRoute}</Routes>
        <Routes>{HomeRoute}</Routes>
      </>
    );
  }
}
export default AppRoutes;
