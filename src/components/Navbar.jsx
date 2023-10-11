import "./Navbar.scss";
import images from "../constants";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsLinkedin, BsMailbox, BsGithub } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logoNoSlogan} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "projects", "skills", "certifications"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "projects", "skills", "certifications"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="app__navbar-social">
              <a
                href="https://github.com/hungdvu1710"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hung-vu-750b93180/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a href="mailto:hung.d.vu1017@gmail.com">
                <BsMailbox />
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
