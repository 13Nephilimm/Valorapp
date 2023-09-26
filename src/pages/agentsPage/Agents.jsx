import React, { useState } from "react";
import "./agents.css";
import Navbar from "../../components/navbar/Navbar";
import AgentsData from "../../components/AgentsData";
import { Link } from "react-router-dom";
import { BsSearchHeartFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Agents = () => {
  const [agents, setAgents] = useState(AgentsData);
  const [search, setSearch] = useState("");

  const allAgents = agents.filter((agent) => {
    return search.toLowerCase() === ""
      ? agent
      : agent.name.toLowerCase().includes(search.toLowerCase());
  });

  const removeFilter = function () {
    setAgents(AgentsData);
  };

  const filterDuelists = function () {
    let duelists = AgentsData.filter((agent) => {
      return agent.role == "Duelist";
    });
    setAgents(duelists);
  };

  const filterControllers = function () {
    let controllers = AgentsData.filter((agent) => {
      return agent.role == "Controller";
    });
    setAgents(controllers);
  };

  const filterInitiators = function () {
    let initiators = AgentsData.filter((agent) => {
      return agent.role == "Initiator";
    });
    setAgents(initiators);
  };

  const filterSentinels = function () {
    let sentinels = AgentsData.filter((agent) => {
      return agent.role == "Sentinel";
    });
    setAgents(sentinels);
  };

  return (
    <>
      <Navbar />
      <motion.section
        className="agents-section section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="filters-container">
          <h1 className="filters-heading">Agents</h1>
          <div className="search-box">
            <BsSearchHeartFill className="search-icon" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="search input"
              placeholder="Search..."
            />
          </div>
          <div className="filters">
            <button className="filter-button button" onClick={removeFilter}>
              All
            </button>
            <button className="filter-button button" onClick={filterDuelists}>
              Duelists
            </button>
            <button
              className="filter-button button"
              onClick={filterControllers}
            >
              Controllers
            </button>
            <button className="filter-button button" onClick={filterInitiators}>
              Initiators
            </button>
            <button className="filter-button button" onClick={filterSentinels}>
              Sentinels
            </button>
          </div>
        </div>
        <div className="agents-container">
          {allAgents.map((agent) => {
            return (
              <Link to={`/agents/${agent.id}`} key={agent.id}>
                <motion.div
                  className="agent-card"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, type: "tween" }}
                >
                  <img
                    src={agent.image}
                    alt="agent-image"
                    className="card-image"
                  />
                  <h2 className="card-name">{agent.name}</h2>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.section>
    </>
  );
};

export default Agents;
