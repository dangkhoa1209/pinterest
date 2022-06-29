import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AuthProvider from "./components/Context/AuthProvider"

function App() {
  return (
    <BrowserRouter>
      < AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
