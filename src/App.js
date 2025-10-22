import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./pages/homePage/Home";
import Agents from "./pages/agentsPage/Agents";
import Agent from "./pages/singleAgentPage/Agent";
import Kda from "./pages/kdaCalculatorPage/Kda";
import "./general.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/kda" element={<Kda />} />
        <Route path="/agents/:id" element={<Agent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
