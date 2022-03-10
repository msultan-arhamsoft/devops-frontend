import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
// import Index from "./pages/todo/Index";
import Home from "./pages/home/Index";
import Todos from "./pages/todo/Index";
import Users from "./pages/user/Index";


function App() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#272727" }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todos" element={<Todos />} />
            <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
