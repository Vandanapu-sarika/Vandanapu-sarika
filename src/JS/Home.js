import React from "react";
import App from "../App";
import { Route, Routes, Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div>
        <Link to="/App">Home</Link>
      </div>
      <Routes>
        <Route path="/App" element={<App />} />
      </Routes>
    </div>
  );
}

export default Home;
