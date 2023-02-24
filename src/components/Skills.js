import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import bash from "../assets/skills/bash.svg";
import kvm from "../assets/skills/kvm.svg";
import linux from "../assets/skills/linux.svg";
import python from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import mikrotik from "../assets/skills/mikrotik.svg";
import kubernetes from "../assets/skills/kubernetes.svg";
import ansible from "../assets/skills/ansible.svg";
import windows from "../assets/skills/windows.svg";
import react from "../assets/skills/react.svg";
import cisco from "../assets/skills/cisco.svg";
import docker from "../assets/skills/docker.svg";
import git from "../assets/skills/git.svg";
import express from "../assets/skills/express.svg";
import gitlab from "../assets/skills/gitlab.svg";
import node from "../assets/skills/nodejs.svg";
import postgresql from "../assets/skills/postgresql.png";
import mysql from "../assets/skills/mysql-icon.svg";
import mongodb from "../assets/skills/mongodb-icon.svg";
import c from "../assets/skills/C++.png";
import java from "../assets/skills/java-svgrepo-com.svg";
import aws from "../assets/skills/Amazon_Web_Services-Logo.wine.svg";
import hr from "../assets/curve-hr.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="java" experience="2 years" img={java} />
          <SkillCard name="aws" experience="1 years" img={aws} />
          <SkillCard name="mongodb" experience="1 years" img={mongodb} />
          <SkillCard name="C++" experience="2 years" img={c} />
          <SkillCard name="linux" experience="2 years" img={linux} />
          <SkillCard name="nodejs" experience="1 years" img={node} />
          <SkillCard name="postgresql" experience="1 years" img={postgresql} />
          <SkillCard name="mysql" experience="1 years" img={mysql} />
          <SkillCard name="python" experience="1 years" img={python} />
          <SkillCard name="javascript" experience="1 years" img={javascript} />
          <SkillCard name="react" experience="1 years" img={react} />
          <SkillCard name="git" experience="1 years" img={git} />
          <SkillCard name="gitlab" experience="1 years" img={gitlab} />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
