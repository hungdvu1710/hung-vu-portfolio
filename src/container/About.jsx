import "./About.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import { AppWrap, MotionWrap } from "../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Passionate <span>Full Stack Generalist</span> <br />
        Expertise in <span>Agile Environment & Tech Solutions</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="copyright">
        <p className="p-text">
          <a href="https://www.freepik.com/free-vector/social-development-abstract-concept-vector-illustration-children-learn-social-skills-competence-positive-impact-successful-communication-career-success-education-abstract-metaphor_11663914.htm#&position=36&from_view=author">
            Image by vectorjuice
          </a>{" "}
          on Freepik
        </p>
        <p className="p-text">
          <a href="https://www.freepik.com/free-vector/internet-lessons-searching-remote-university-educational-programs-online-classes-website-high-school-student-with-magnifying-glass-cartoon-character_12145562.htm#query=quick%20learner&position=24&from_view=search&track=ais">
            Image by vectorjuice
          </a>{" "}
          on Freepik
        </p>
        <p className="p-text">
          <a href="https://www.freepik.com/free-vector/coding-website-development-technical-support-programming-engineering-coder-web-developer-computer-software-programmer-male-flat-character-concept-illustration_11667257.htm#query=web%20developer%20vectorjuice&position=5&from_view=search&track=ais">
            Image by vectorjuice
          </a>{" "}
          on Freepik
        </p>
        <p className="p-text">
          <a href="https://www.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_11669143.htm#query=web%20developer%20vectorjuice&position=25&from_view=search&track=ais">
            Image by vectorjuice
          </a>{" "}
          on Freepik
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
