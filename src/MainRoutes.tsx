import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ScoreBoard from "./components/ScoreBoard";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="score" element={<ScoreBoard />} />
    </Routes>
  );
}

export default MainRoutes;
