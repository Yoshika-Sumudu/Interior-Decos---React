import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect } from "react";

import "../styles/Products.css";

import chair1 from "../images/chair1.jpg";
import sofa1 from "../images/sofa1.jpg";
import sofa2 from "../images/sofa2.png";
import lamp1 from "../images/lamp1.jpg";
import lamp2 from "../images/lamp2.jpg";
import bed1 from "../images/bed1.jpg";
import chair2 from "../images/chair2.jpg";

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

const Products = () => {
  const [ref, inView] = useInView();

  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0.2 },
  };

  const transition = {
    duration: 3,
    ease: "linear",
  };

  return (
    <section className="products-section">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={transition}
      >
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
      </motion.div>
    </section>
  );
};

export default Products;
