import React from "react";
import { Routes,Route } from "react-router-dom";

function AllRoutes() {
  return <Routes>
    <Route path="/" element={<h1>Hello World</h1>}/>
  </Routes>;
}

export default AllRoutes;
