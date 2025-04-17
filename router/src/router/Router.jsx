import React from "react";
import App from "../App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "../pages/Basket";
import Wish from "../pages/Wish";
const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wish" element={<Wish/>} />
        </Routes>
      </BrowserRouter>
    );
  };

export default Router;
