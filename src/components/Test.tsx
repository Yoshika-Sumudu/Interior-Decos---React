// import React from 'react'
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import "../styles/Test.css";
// import living3 from "../images/living3.jpg";
import living1 from "../images/living1.jpg";
import kitchen1 from "../images/kitchen1.jpg";
import living3 from "../images/living3.jpg";
import living6 from "../images/living6.jpg";
import living10 from "../images/living10.jpg";
import bedroom1 from "../images/bedroom1.jpg";

// products
import chair1 from "../images/chair1.jpg";
import sofa1 from "../images/sofa1.jpg";
import sofa2 from "../images/sofa2.png";
import lamp1 from "../images/lamp1.jpg";
import lamp2 from "../images/lamp2.jpg";
import bed1 from "../images/bed1.jpg";
import chair2 from "../images/chair2.jpg";

// team
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.jpg";
import person5 from "../images/person5.jpg";
import person6 from "../images/person6.jpg";
import person7 from "../images/person7.jpg";

const Test = () => {
  const [ref, inView] = useInView();

  // const animationVariants = {
  //   visible: { opacity: 1, y: 0 },
  //   hidden: { opacity: 0.5, y: 100 },
  // };

  // #0c1727
  const animationVariants = {
    visible: { height: 1, y: -100 },
    hidden: { height: 0.5, y: 100 },
  };

  const animationVariants2 = {
    visible: { width: 500, x: 100 },
    hidden: { width: 500, x: -100 },
  };
  const animationVariants3 = {
    visible: { width: 500, x: 100 },
    hidden: { width: 500, x: 500 },
  };

  // const animationVariants4 = {
  //   visible: { height: 1, y: 100 },
  //   hidden: { height: 1, y: 100 },
  // };
  // const animationVariants = {
  // 	visible: { width: '100px', height: '100px' },
  // 	hidden: { width: '50px', height: '50px' },
  //   };

  const transition = {
    // type: "spring",
    //   damping: 5,
    //   stiffness: 100,
    duration: 3,
    ease: "linear",
  };

  // projects

  interface Project {
    image: string;
    title: string;
    description: string;
    wishlist: boolean;
    // cart: boolean;
  }

  const projects: Project[] = [
    {
      image: bedroom1,
      title: "Project 1",
      description: "Description of Project",
      wishlist: false,
      // cart: false,
    },
    {
      image: living10,
      title: "Project 2",
      description: "Description of Project",
      wishlist: false,
      // cart: false,
    },
    {
      image: living6,
      title: "Project 3",
      description: "Description of Project",
      wishlist: false,
      // cart: false,
    },
    {
      image: kitchen1,
      title: "Project 4",
      description: "Description of Project",
      wishlist: false,
      // cart: false,
    },
    {
      image: living3,
      title: "Project 5",
      description: "Description of Project",
      wishlist: false,
      // cart: false,
    },
  ];

  const [projectList, setProjectList] = useState<Project[]>(projects);

  // const handleWishlistClick = (index: number) => {
  //   const updatedProjects = [...projectList];
  //   updatedProjects[index].wishlist = !updatedProjects[index].wishlist;
  //   setProjectList(updatedProjects);
  // };
  const handleWishlistClick = (index: number) => {
    setProjectList((prevList) => {
      const updatedProjects = [...prevList];
      updatedProjects[index].wishlist = !updatedProjects[index].wishlist;
      return updatedProjects;
    });
  };

  // const handleCartClick = (index: number) => {
  //   const updatedProjects = [...projectList];
  //   updatedProjects[index].cart = !updatedProjects[index].cart;
  //   setProjectList(updatedProjects);
  // };

  // products

  interface Product {
    image: string;
    title: string;
    description: string;
  }

  const products: Product[] = [
    {
      image: sofa2,
      title: "Product 1",
      description: "Description of Product",
    },
    {
      image: chair2,
      title: "Product 2",
      description: "Description of Product",
    },
    {
      image: sofa1,
      title: "Product 3",
      description: "Description of Product",
    },
    {
      image: lamp2,
      title: "Product 4",
      description: "Description of Product",
    },
    {
      image: bed1,
      title: "Product 5",
      description: "Description of Product",
    },
  ];

  // Team

  interface Team {
    image: string;
    title: string;
    description: string;
  }

  const members: Team[] = [
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
  ];

  return (
    <>
      <section className="projects-section" id="projects-section">
        {/* <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants4}
            transition={transition}
          > */}
        <h2>Our Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              {/* <div>
                <button
                  className={`wishlist-button ${
                    project.wishlist ? "active" : ""
                  }`}
                  onClick={() => handleWishlistClick(index)}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`${project.wishlist ? "red" : ""}`}
                  />
                </button>
                <p>hjhjh</p>
              </div> */}
              <div className="project-overlay">
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="view-button">View</button>
                  <div>
                    {/* <button
                      className={`wishlist-button ${
                        project.wishlist ? "active" : ""
                      }`}
                      onClick={() => handleWishlistClick(index)}
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={`${project.wishlist ? "red" : ""}`}
                      />
                    </button> */}
                    <button
                      className={`wishlist-button ${
                        project.wishlist ? "active" : ""
                      }`}
                      onClick={() => handleWishlistClick(index)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>

                    {/* <button
                      className={`cart-button ${project.cart ? "active" : ""}`}
                      onClick={() => handleCartClick(index)}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="more-projects-button">More Projects</button>
        {/* </motion.div> */}
      </section>

      <section className="products-section">
        {/* <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants4}
            transition={transition}
          > */}
        <h2>Our Products</h2>
        <div className="products-container">
          {products.map((product, index) => (
            <div key={index} className="project-card">
              <img
                src={product.image}
                alt={product.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-details">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button className="view-button">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="more-products-button">More Products</button>
        {/* </motion.div> */}
      </section>

      <div className="section">
        <div className="section-container">
          <div className="section-image">
            <img src={living3} alt="Section Image" className="section-img" />
          </div>
          {/* <div>Content</div> */}
          <div className="section-text" id="">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={transition}
            >
              <h2>Dreams to Reality</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, impedit dolorum! Pariatur quod rerum deleniti rem
                quam tempora quisquam inventore! A possimus iure, quam dolorem
                nesciunt consequatur aliquam ipsa repellat?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique velit sapiente iusto perspiciatis inventore odio
                perferendis consequuntur, facere sequi amet nostrum repudiandae
                maxime laborum natus possimus, illo itaque, accusantium sunt.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="section" id="section3">
        <div className="section-container">
          <div className="section-image">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants2}
              transition={transition}
            >
              <p className="reach-us">Reach to us...</p>
            </motion.div>
          </div>
          {/* <div>Content</div> */}
          <div className="section-text">
            <div id="ContactForm">
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationVariants3}
                transition={transition}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <section className="team-section">
        {/* <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants4}
            transition={transition}
          > */}
        <h2>Our Team</h2>
        <div className="team-container">
          {members.map((team, index) => (
            <div key={index} className="team-card">
              <img src={team.image} alt={team.title} className="team-image" />
              {/* <div className="team-overlay">

              </div> */}
              <div className="team-details">
                <h5>{team.title}</h5>
                <p>{team.description}</p>
                {/* <button className="view-button">View</button> */}
              </div>
            </div>
          ))}
        </div>
        {/* </motion.div> */}
      </section>
    </>
  );
};

// window.addEventListener('scroll', function() {
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//   var translateY = -scrollPosition + 'px';

//   var myElement = document.getElementById('projects-section');
//   myElement.style.transform = 'translate3d(0px, ' + translateY + ', 0px)';
//   });

export default Test;
