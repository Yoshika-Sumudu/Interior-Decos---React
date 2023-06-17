import React, { useEffect, useState } from "react";
import "../styles/Animation.css";

interface AnimationProps {
  images: string[];
  timeDelay: number;
}

const Animation: React.FC<AnimationProps> = ({ images, timeDelay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, timeDelay);

    return () => clearInterval(interval);
  }, [images.length, timeDelay]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  

  return (
    <div className="animation-container">
      <div className="image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Animated Image"
            className={index === currentImageIndex ? "active" : ""}
            onClick={goToNextImage}
          />
        ))}
        <div className="image-overlay" onClick={goToPreviousImage}></div>
      </div>
    </div>
  );
};

export default Animation;
