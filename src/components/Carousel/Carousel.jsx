import "../Carousel/Carousel.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

{
  /* Importing the carousel cover images from carousel.js */
}

import images from "../../components/Carousel/carousel";

export const Carousel = () => {
  {
    /*  Carousel functionality */
  }
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div
        ref={carousel}
        className="carousel-main"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="carousel-inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((image) => {
            return (
              <motion.div key={image} className="item">
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};
