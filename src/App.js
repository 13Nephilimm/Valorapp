import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./pages/homePage/Home.tsx";
import Agents from "./pages/agentsPage/Agents.tsx";
import Agent from "./pages/singleAgentPage/Agent.tsx";
import Kda from "./pages/kdaCalculatorPage/Kda.tsx";
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
