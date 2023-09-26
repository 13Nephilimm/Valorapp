import React, { useState } from "react";
import "./agent.css";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router";
import AgentsData from "../../components/AgentsData";
import { motion } from "framer-motion";

const Agent = () => {
  const params = useParams();
  const [agents, setAgents] = useState(AgentsData);
  const singleAgent = agents.filter((agent) => agent.id == params.id);
  const {
    name,
    gender,
    abilities,
    id,
    role,
    nationality,
    description,
    image,
    pistol,
  } = singleAgent[0];

  return (
    <>
      <Navbar />
      <motion.section
        className="agent-section section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="agent-heading">
          NO.{id} // <span>{name}</span>
        </motion.h1>
        <div className="agent-container">
          <motion.div
            className="left-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="img-box">
              <img src={image} alt="agent-image" />
            </div>
            <div className="short-info">
              <h3>
                <strong>Name:</strong> {name}
              </h3>
              <h3>
                <strong>Nationality:</strong> {nationality}
              </h3>
              <h3>
                <strong>Role:</strong> {role}
              </h3>
              <h3>
                <strong>Gender:</strong> {gender}
              </h3>
            </div>
          </motion.div>
          <div className="right-boxes-container">
            <motion.div
              className="right-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1.5 }}
              transition={{ duration: 1 }}
            >
              <h2>Description</h2>
              <p>{description}</p>
              <h2>Abilities</h2>
              <p>
                {abilities[0]}, {abilities[1]}, {abilities[2]},
                <span> {abilities[3]}</span>
              </p>
            </motion.div>
            <span className="wrap">
              <motion.div
                className="pistol-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <img src={pistol} alt="agent-special-gun-image" />
              </motion.div>
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Agent;
