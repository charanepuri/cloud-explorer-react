import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import IaaS from "./pages/IaaS";
import PaaS from "./pages/PaaS";
import SaaS from "./pages/SaaS";
import Comparison from "./pages/Comparison";
import Quiz from "./pages/Quiz";
import About from "./pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iaas" element={<IaaS />} />
      <Route path="/paas" element={<PaaS />} />
      <Route path="/saas" element={<SaaS />} />
      <Route path="/comparison" element={<Comparison />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;