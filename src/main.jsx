import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import Error404 from "./pages/Error404.jsx";
import "./index.css";
import SourceProvider from "./services/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SourceProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </SourceProvider>
  </BrowserRouter>
);
