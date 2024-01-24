import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        "Transforming code into captivating experiences, my journey is a symphony of innovation 
          <br /> and achievements in the world of development. "
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Experience</motion.b> And
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Achievements</motion.b> With Skills.
          </h1>
          <button>Proficient in</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Education</h2>
          <p>
          - 12th Grade (SPVN College, Baramati, 2021): Achieved an outstanding score of <b>97.83%</b>.<br></br>
          - 10th Grade (RNAT Baramati, 2019): Secured an impressive <b>93.80%</b>.<br></br>
          - Currently pursuing 3rd-year E&TC Engineering: Maintaining a commendable CGPA of <b>8.74</b>, reflecting a commitment to academic excellence and continuous learning.<br></br>
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Skills Set</h2>
          <p>
          -<b>MERN Stack Development</b>:Proficient in MongoDB, Express.js, React, and Node.js for robust full-stack applications.<br></br>
          - <b>Data Structures & Algorithms</b>: Strong foundation for efficient problem-solving and algorithmic thinking in C++.<br></br>
          {/* - <b>Web Development Expertise</b>: Successfully delivered projects including e-commerce platforms and dynamic web applications.<br></br> */}
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Experience</h2>
          <p>
          <b>1. PICT college Earn & Learn Scheme </b>
          Sept 2022-Feb 2023<br></br>
          <b>2. Baramati Engineering Pvt, Lmt.. </b>
          July 2021-Oct 2021<br></br>
          <b>3. Rainbow International Pvt, Lmt. </b>
          2019- 2017 (Summer)<br></br>
          <b>4. PICT EDC, Head Of Finance </b>Handled dyanamic team of
          218 Student on different Events like Magnate and Internhunt<br></br>
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Acheivement</h2>
          <p>
          1. ICAR Debate competition won<br></br>
          2. 1st Rank KGV group (Elocution)<br></br>
          3. 3 year Division level Quiz competition winner 2017-18-19<br></br>
          4. Best Cadet Award in Army School 2020<br></br>
          5. VP District level Quiz 1st Rank<br></br>
            
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
