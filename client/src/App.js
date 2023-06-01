import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Article from "./Component/Article";

// TODO: resolve glitch and routing
// TODO: resolve Coming soon to read articles...

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
