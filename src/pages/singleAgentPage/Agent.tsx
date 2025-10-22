import { useState } from "react";
import "./agent.css";
import Navbar from "../../components/navbar/Navbar.tsx";
import { useParams } from "react-router";
import AgentsData from "../../components/AgentsData.ts";
import { motion } from "framer-motion";

const Agent = () => {
  const { id } = useParams();
  const agentId = Number(id);

  const [agents] = useState(AgentsData);

  const singleAgent = agents.find((agent) => agent.id === agentId);

  if (!singleAgent) {
    return (
      <>
        <Navbar />
        <h2 className="not-found">Agent Not Found</h2>
      </>
    );
  }

  const {
    name,
    gender,
    abilities,
    id: agentIndex,
    role,
    nationality,
    description,
    image,
    pistol,
  } = singleAgent;

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
          NO.{agentIndex} // <span>{name}</span>
        </motion.h1>

        <div className="agent-container">
          {/* LEFT SIDE */}
          <motion.div
            className="left-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="img-box">
              <img src={image} alt={`${name}-image`} />
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

          {/* RIGHT SIDE */}
          <div className="right-boxes-container">
            <motion.div
              className="right-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
                <img src={pistol} alt={`${name}-pistol`} />
              </motion.div>
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Agent;
