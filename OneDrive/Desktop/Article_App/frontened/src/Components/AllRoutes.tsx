import React from "react";
import { Routes,Route } from "react-router-dom";
import Login from "../Pages/Login";
import Regsiter from "../Pages/Register";

function AllRoutes() {
  return <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Regsiter/>}/>
  </Routes>;
}

export default AllRoutes;
