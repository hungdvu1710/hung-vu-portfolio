import "./About.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const abouts = [
  {
    title: "Full Stack Generalist",
    description: "I have experience in both frontend and backend development. I can build a website from scratch, from designing UI/UX to deploying the website.",
    imgUrl: "https://i.imgur.com/8J5ZQ1Z.png"
  },
  {
    title: "Dynamic Developer",
    description: "I am a dynamic developer. I can work with different programming languages and frameworks.",
    imgUrl: "https://i.imgur.com/8J5ZQ1Z.png"
  },
  {
    title: "Quick Learner",
    description: "I am a quick learner and I am always eager to learn new things.",
    imgUrl: "https://i.imgur.com/8J5ZQ1Z.png"
  },
  {
    title: "Team Player",
    description: "I am a team player and I can work well with others.",
    imgUrl: "https://i.imgur.com/8J5ZQ1Z.png"
  }
]

const About = () => {
  return (
    <>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
