import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { QnA } from "./Pages/QnA/QnA";
import { QnADetail } from "./Pages/QnADetail/QnADetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QnA />} />
        <Route path="/QnA" element={<QnA />} />
        <Route path="/login" element={<Login />} />
        <Route path="detail" element={<QnADetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
