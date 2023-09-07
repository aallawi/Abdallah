import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "remixicon/fonts/remixicon.css";
import "./App.css";

import {
  HomePage,
  AboutPage,
  MenuPage,
  ContactPage,
  NotFound,
} from "./Pages/index";

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="AboutPage" element={<AboutPage />} />
      <Route path="MenuPage" element={<MenuPage />} />
      <Route path="ContactPage" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
