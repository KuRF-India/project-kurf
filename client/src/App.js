import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Article from "./Component/Article";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
