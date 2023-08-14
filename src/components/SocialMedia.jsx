import React from "react";
import { BsLinkedin, BsMailbox, BsGithub } from "react-icons/bs";


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/hungdvu1710" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/hung-vu-750b93180/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="mailto:hung.d.vu1017@gmail.com">
        <BsMailbox />
      </a>
    </div>
  </div>
);

export default SocialMedia;
