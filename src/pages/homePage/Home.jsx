import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import PLAYERCARD from "../../assets/player-card.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar />
      <motion.section
        className="hero-section section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="map">Map - Split</h2>
        <h3 className="gamemode">Competetive</h3>
        <div className="lobby-container">
          <div className="player-box player-box-third">
            <div>
              <p>+</p>
            </div>
          </div>
          <div className="player-box player-box-secondary">
            <div>
              <p>+</p>
            </div>
          </div>
          <div className="player-box player-box-main">
            <img src={PLAYERCARD} alt="player-card" />
            <h2 className="player-name">Player</h2>
            <h3 className="player-status">Ready</h3>
          </div>
          <div className="player-box player-box-secondary">
            <div>
              <p>+</p>
            </div>
          </div>
          <div className="player-box player-box-third">
            <div>
              <p>+</p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="lobby-button">
            <Link to={"/agents"}>Agents</Link>
          </button>
          <button className="lobby-button lobby-button-main">
            <a href="https://playvalorant.com/en-gb/" target="_blank">
              Play
            </a>
          </button>
          <button className="lobby-button">
            <Link to={"/kda"}>KDA Calculator</Link>
          </button>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
