import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";
import "./Certifications.scss";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    const query = '*[_type == "certifications"]{link, title}';

    client.fetch(query).then((data) => {
      setCertifications(data);
      console.log(data)
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Certifications</span>
      </h2>
    </>
  )
};

export default AppWrap(
  MotionWrap(Certifications, 'app__certifications'),
  'certifications',
  'app__primarybg',
);
