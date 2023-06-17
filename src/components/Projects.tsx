import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import "../styles/Projects.css";

import living1 from "../images/living1.jpg";
import kitchen1 from "../images/kitchen1.jpg";
import living3 from "../images/living3.jpg";
import living6 from "../images/living6.jpg";
import living10 from "../images/living10.jpg";
import bedroom1 from "../images/bedroom1.jpg";

const Projects = () => {
  const [ref, inView] = useInView();

  const animationVariants = {
    visible: {opacity: 1 },
    hidden: { opacity: 0.2},
  };

  const transition = {
    duration: 3,
    ease: "linear",
  };

  const projects = [
    {
      image: bedroom1,
      title: "Project 1",
      description: "Description of Project",
      wishlist: false,
    },
    {
      image: living10,
      title: "Project 2",
      description: "Description of Project",
      wishlist: false,
    },
    {
      image: living6,
      title: "Project 3",
      description: "Description of Project",
      wishlist: false,
    },
    {
      image: kitchen1,
      title: "Project 4",
      description: "Description of Project",
      wishlist: false,
    },
    {
      image: living3,
      title: "Project 5",
      description: "Description of Project",
      wishlist: false,
    },
  ];

  const [projectList, setProjectList] = useState(projects);

  const handleWishlistClick = (index: number) => {
    setProjectList((prevList) => {
      const updatedProjects = [...prevList];
      updatedProjects[index].wishlist = !updatedProjects[index].wishlist;
      return updatedProjects;
    });
  };

  return (
    <section className="projects-section" id="projects-section">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={transition}
      >
        <h2>Our Projects</h2>
        <div className="projects-container">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="view-button">View</button>
                  <div>
                    <button
                      className={`wishlist-button ${
                        project.wishlist ? "active" : ""
                      }`}
                      onClick={() => handleWishlistClick(index)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="more-projects-button">More Projects</button>
      </motion.div>
    </section>
  );
};

export default Projects;
