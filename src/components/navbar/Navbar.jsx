import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          The Morningstar 🖤💫
        </motion.span>
        <div className="social">
          {/* <a href="#">
            <img src="/facebook.png" alt="" />
          </a> */}
          <a href="https://www.linkedin.com/in/kishor-shinde-12924a25b" target="_blank" rel="noopener noreferrer">
            <img src="/Linkedin.jpeg" alt="" />
          </a>
          <a href="https://www.instagram.com/kishor_vs.3009/" rel="noopener noreferrer">
            <img src="/instagram.png" alt="" />
          </a>
          
          <a href="https://github.com/Kishor3009/" target="_blank" rel="noopener noreferrer">
          <img src="/git.jpeg" alt="GitHub Profile" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
