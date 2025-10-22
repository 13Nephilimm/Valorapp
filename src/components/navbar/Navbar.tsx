import "./navbar.css";
import { Link } from "react-router-dom";
import { SiValorant } from "react-icons/si";
import { FaHatCowboy } from "react-icons/fa";
import { TbCalculatorFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link to={"/agents"}>
        <div className="icon-box">
          <FaHatCowboy className="nav-icon" />
        </div>
      </Link>
      <Link to={"/"}>
        <div className="icon-box">
          <SiValorant className="logo" />
        </div>
      </Link>
      <Link to={"/kda"}>
        <div className="icon-box">
          <TbCalculatorFilled className="nav-icon" />
        </div>
      </Link>
    </motion.nav>
  );
};

export default Navbar;
