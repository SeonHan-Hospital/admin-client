import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { QnA } from "./Pages/QnA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QnA />} />
        <Route path="/QnA" element={<QnA />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
