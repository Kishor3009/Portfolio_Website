import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "/assets/Ecommerce.jpg",
    desc: (
      <>
        <p>
        MERN stack developer with expertise in creating innovative web applications. Contributed to the development of a secure and responsive E-Commerce Platform, implementing user authentication, a dynamic product catalog, and an intuitive shopping cart. Specialized in integrating a payment gateway, enabling secure transactions with both sandbox testing and PayPal. Proficient in React.js, Node.js, Express.js, and MongoDB, ensuring optimal performance and scalability. Strong commitment to enhancing the user experience and contributing to cutting-edge projects.
        </p>
        {/* Add some space between the paragraph and the button */}
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => { console.log("Button clicked!"); window.location.href = "https://e-comm-website-sandy.vercel.app/"; }}>See Demo</button>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "/assets/News_App.jpg",
    desc: (
      <>
        <p>
        Built a News Reader App with Next.js, Firebase authentication, and an open-source news API, providing users with personalized news experiences in list and grid views..
        </p>
        <p>Developed a modern UI with responsive design and interactive
        features for seamless news exploration.
        </p>
        {/* Add some space between the paragraph and the button */}
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => { console.log("Button clicked!"); window.location.href = "https://nextjs-news-app-main-ueuh.vercel.app/"; }}>See Demo</button>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Restaurant_app_Zaika",
    img: "/assets/Zaika.jpg",
    desc: (
      <>
        <p>
        Skilled Frontend Developer adept at creating captivating restaurant websites with JavaScript and React.js. Excels in designing interactive UI, ensuring seamless navigation, and enhancing user experience through modern design and multimedia integration. 
        </p>
        <p>Developed a modern UI with responsive design and interactive
        features for seamless news exploration.
        </p>
        {/* Add some space between the paragraph and the button */}
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => { console.log("Button clicked!"); window.location.href = "https://restaurant-app-zaika.vercel.app/"; }}>See Demo</button>
        </div>
      </>
    ),
    
  },
  {
    id: 4,
    title: "Blog App ",
    img: "/assets/blogAppImage.jpg",
    desc: (
      <>
        <p>
        Revolutionize your online presence with our MERN Stack-powered Blog App. Experience seamless content creation and management with user-friendly features. Enjoy secure authentication, responsive design, and real-time updates for an engaging blogging experience. 
        </p>
        <p>Elevate your online presence and contribute to vibrant communities with our dynamic Blog App.
        </p>
        {/* Add some space between the paragraph and the button */}
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => { console.log("Button clicked!"); window.location.href = "https://blog-app-mern-80pw.onrender.com/"; }}>See Demo</button>
        </div>
      </>
    ),
    
  }
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
