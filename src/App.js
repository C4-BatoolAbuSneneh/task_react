import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
import Home from "./component/Home/Home";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
