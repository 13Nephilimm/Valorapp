import React, { useState } from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import PLAYERCARD from "../../assets/player-card.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PC2 from "../../assets/player-card-2.jpg";
import PC3 from "../../assets/player-card-3.jpg";
import PC4 from "../../assets/player-card-4.jpg";
import PC5 from "../../assets/player-card-5.jpg";

const Home = () => {
  const [player, setPlayer] = useState(false);
  const [player2, setPlayer2] = useState(false);
  const [player3, setPlayer3] = useState(false);
  const [player4, setPlayer4] = useState(false);

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
          <div
            className="player-box player-box-third"
            onClick={() => {
              setPlayer(!player);
            }}
          >
            {player ? (
              <>
                <motion.img
                  src={PC3}
                  alt="player-card"
                  className="player-card-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <h2 className="player-name">Player 4</h2>
                <h3 className="player-status">Ready</h3>
              </>
            ) : (
              <div>
                <p>+</p>
              </div>
            )}
          </div>
          <div
            className="player-box player-box-secondary"
            onClick={() => {
              setPlayer3(!player3);
            }}
          >
            {player3 ? (
              <>
                <motion.img
                  src={PC4}
                  alt="player-card"
                  className="player-card-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <h2 className="player-name">Player 2</h2>
                <h3 className="player-status">Ready</h3>
              </>
            ) : (
              <div>
                <p>+</p>
              </div>
            )}
          </div>
          <div className="player-box player-box-main">
            <img src={PLAYERCARD} alt="player-card" />
            <h2 className="player-name">Player</h2>
            <h3 className="player-status">Ready</h3>
          </div>
          <div
            className="player-box player-box-secondary"
            onClick={() => {
              setPlayer4(!player4);
            }}
          >
            {player4 ? (
              <>
                <motion.img
                  src={PC5}
                  alt="player-card"
                  className="player-card-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <h2 className="player-name">Player 3</h2>
                <h3 className="player-status">Ready</h3>
              </>
            ) : (
              <div>
                <p>+</p>
              </div>
            )}
          </div>
          <div
            className="player-box player-box-third"
            onClick={() => {
              setPlayer2(!player2);
            }}
          >
            {player2 ? (
              <>
                <motion.img
                  src={PC2}
                  alt="player-card"
                  className="player-card-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <h2 className="player-name">Player 5</h2>
                <h3 className="player-status">Ready</h3>
              </>
            ) : (
              <div>
                <p>+</p>
              </div>
            )}
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
