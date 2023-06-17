import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";

import "../styles/Team.css";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.jpg";
import person5 from "../images/person5.jpg";
import person6 from "../images/person6.jpg";
import person7 from "../images/person7.jpg";

const Team: React.FC = () => {
  const [ref, inView] = useInView();
  const members = useRef([
    {
      image: person2,
      title: "Team Member name",
      description: "Role",
    },
    {
      image: person7,
      title: "Team Member name",
      description: "Role",
    },
    {
      image: person3,
      title: "Team Member name",
      description: "Role",
    },
    {
      image: person4,
      title: "Team Member name",
      description: "Role",
    },
    {
      image: person1,
      title: "Team Member name",
      description: "Role",
    },
  ]).current;

  const animationVariants: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0.5, y: 100 },
  };

  const transition = {
    duration: 3,
    ease: "linear",
  };

  return (
    <section className="team-section">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={transition}
      >
        <h2>Our Team</h2>
        <div className="team-container">
          {members.map((team, index) => (
            <div key={index} className="team-card">
              <img src={team.image} alt={team.title} className="team-image" />
              <div className="team-details">
                <h5>{team.title}</h5>
                <p>{team.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
