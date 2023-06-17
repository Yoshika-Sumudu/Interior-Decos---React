// import './App.css'
import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";

import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ScrollAnimation from "./components/ScrollAnimation";
import image1 from "./images/1.jpg";
import kids1 from "./images/kids1.jpg";
import living2 from "./images/living2.jpg";
import Projects from "./components/Projects";
import Products from "./components/Products";
import Team from "./components/Team";
// import Test from "./components/Test";

function App() {
  const images = [image1, kids1, living2];

  const timeDelay = 5000;

  return (
    <div>
      <Navbar />
      <Animation images={images} timeDelay={timeDelay} />

      <Projects></Projects>
      <Products></Products>
      <ScrollAnimation>
        <Content></Content>
      </ScrollAnimation>
      <Team></Team>
      <Footer></Footer>
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
