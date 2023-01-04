import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/Page/About";
import Contact from "../Pages/Page/Contact";
import Home from "../Pages/Page/Home";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Home />
        }
      />
      <Route
        path="/about"
        element={
            <About />
        }
      />
      <Route
        path="/contact"
        element={
        
            <Contact />
         
        }
      />
    </Routes>
  );
};

export default Router;
