import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Todos from "./pages/todo/Index";


function App() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#272727" }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
