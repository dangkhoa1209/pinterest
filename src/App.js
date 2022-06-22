import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
