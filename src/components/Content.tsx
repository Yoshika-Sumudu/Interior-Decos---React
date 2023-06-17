import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import "../styles/Content.css";
import living3 from "../images/living3.jpg";

const Content = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

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

  const transition = {
    duration: 3,
    ease: "linear",
  };

  return (
    <>
      <div className="section">
        <div className="section-container">
          <div className="section-image">
            <img src={living3} alt="Section Image" className="section-img" />
          </div>
          <div className="section-text" id="">
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={transition}
            >
              <h2>Dreams to Reality</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae, sint. Ipsa aliquam illo atque, non eius odit
                dolores repudiandae tempore at assumenda repellat soluta minima
                aperiam maiores laboriosam eaque dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                atque expedita recusandae facere eum! Beatae dolor cumque autem,
                ex eligendi, fugiat quos assumenda quis nobis eveniet similique
                temporibus, praesentium non.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="section" id="section3">
        <div className="section-container">
          <div className="section-image">
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={animationVariants2}
              transition={transition}
            >
              <p className="reach-us">Reach to us...</p>
            </motion.div>
          </div>
          <div className="section-text">
            <div id="ContactForm">
              <motion.div
                ref={ref3}
                initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={animationVariants3}
                transition={transition}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
