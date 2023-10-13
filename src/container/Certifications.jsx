import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";
import "./Certifications.scss";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    const query = '*[_type == "certifications"]{link, title, _id, imgUrl}';

    client.fetch(query).then((data) => {
      setCertifications(data);
    });
  }, []);

  const animateCard = { y: 0, opacity: 1 }

  return (
    <>
      <h2 className="head-text">
        My <span>Certifications</span>
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certification-portfolio"
      >
        {certifications.map((certification) => (
          <div className="app__certification-item app__flex" key={certification._id}>
            <div className="app__certification-img">
              <img src={urlFor(certification.imgUrl)} alt={certification.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__certification-hover app__flex"
              >
                <a href={certification.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__certification-content app__flex">
              <h4 className="bold-text">{certification.title}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
};

export default AppWrap(
  MotionWrap(Certifications, 'app__certifications'),
  'certifications',
  'app__primarybg',
);
