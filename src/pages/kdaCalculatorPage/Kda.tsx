import { useState } from "react";
import "./kda.css";
import Navbar from "../../components/navbar/Navbar.tsx";
import { GiDeathZone, GiCrossbow } from "react-icons/gi";
import { FaCrosshairs } from "react-icons/fa";
import { motion } from "framer-motion";

const Kda = () => {
  const [kills, setKills] = useState<number>(0);
  const [assists, setAssists] = useState<number>(0);
  const [deaths, setDeaths] = useState<number>(0);

  const kda: number = Number(
    ((Number(kills) + Number(assists)) / Number(deaths)).toFixed(2)
  );

  return (
    <>
      <Navbar />
      <motion.section
        className="section kda-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Your KDA Calculator</h1>
        <div className="input-container">
          <div className="input-box">
            <FaCrosshairs className="input-icon" />
            <input
              type="number"
              className="kills input"
              placeholder="Kills..."
              value={kills}
              onChange={(e) => setKills(Number(e.target.value))}
            />
          </div>
          <div className="input-box">
            <GiCrossbow className="input-icon" />
            <input
              type="number"
              className="assists input"
              placeholder="Assists..."
              value={assists}
              onChange={(e) => setAssists(Number(e.target.value))}
            />
          </div>
          <div className="input-box">
            <GiDeathZone className="input-icon" />
            <input
              type="number"
              className="deaths input"
              placeholder="Deaths..."
              value={deaths}
              onChange={(e) => setDeaths(Number(e.target.value))}
            />
          </div>
          {kda > 0 && kda != Infinity && (
            <h2 className="kda-heading">
              Your KDA is:
              <span>{kda}</span>
            </h2>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Kda;
