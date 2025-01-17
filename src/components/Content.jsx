import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";

function Content() {
  
  // Lokalny scroll dla `second-img-container`
  const textRef = useRef(null);
  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });
  const textX = useTransform(textProgress, [0, 0.3], ["-50%", "0%"]);

  const imgRef = useRef(null);
  const { scrollYProgress: imgProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgX = useTransform(imgProgress, [0, 0.3], ["50%", "0%"]);

   // Lokalny scroll dla leftImg i h2
   const leftImgRef = useRef(null);
   const { scrollYProgress: leftImgProgress } = useScroll({
     target: leftImgRef,
     offset: ["start end", "end start"],
   });
   const leftImgX = useTransform(leftImgProgress, [0, 0.3], ["-50%", "0%"]);
 
   const h2Ref = useRef(null);
   const { scrollYProgress: h2Progress } = useScroll({
     target: h2Ref,
     offset: ["start end", "end start"],
   });
   const h2X = useTransform(h2Progress, [0, 0.3], ["50%", "0%"]);

  return (
    <div>
      <div className="introduction">
        <h1>
          Nazywam się Paweł i tworzę strony internetowe wizytówki za
          ekstremalnie tanią cenę
        </h1>
      </div>
      <div className="second-img-container">
        <motion.div ref={textRef} style={{ x: textX }} className="text-button">
          <h2>
            Jestem absolwentem studiów wyższych o kierunku informatyka. Tworzę
            strony internetowe z pasji oraz zwracam uwagę nawet na najmniejsze
            szczegóły
          </h2>
          <Link to="/Aboutme" className="nav-link " aria-current="page">
            <button
              type="button"
              className="btn btn-primary btn-animated px-4 py-2"
            >
              WIĘCEJ O MNIE
            </button>
          </Link>
        </motion.div>
        <motion.img
          ref={imgRef}
          style={{ x: imgX }}
          src="https://www.jobhopin.com/blog/wp-content/uploads/2020/01/Untitled-design-2.png"
          className="rightimg"
          alt="programista"
        ></motion.img>
      </div>
      <div
        className="img-container"
        style={{
          position: "relative",
        }}
      >
        <motion.img
         ref={leftImgRef}
         style={{ x: leftImgX }}
         src="https://media.istockphoto.com/id/1418476287/photo/businessman-analyzing-companys-financial-balance-sheet-working-with-digital-augmented-reality.jpg?s=612x612&w=0&k=20&c=Cgdq4iCELzmCVg19Z69GPt0dgNYbN7zbAARkzNSpyno="
         className="leftimg"
         alt="wzrost biznesu"
        />
        <motion.h2 ref={h2Ref} style={{ x: h2X }}
        >
          Chcesz zwiększyć zyski swojego biznesu?Chcesz zwiększyć zyski swojego
          biznesu? Chcesz zwiększyć zyski swojego biznesu?Chcesz zwiększyć zyski
          swojego biznesu? Chcesz zwiększyć zyski swojego biznesu?Chcesz
          zwiększyć zyski swojego biznesu?Chcesz zwiększyć zyski swojego
          biznesu?Chcesz zwiększyć zyski swojego biznesu?
        </motion.h2>
      </div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <h5>Chcesz zwiększyć zyski swojego biznesu?</h5>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <h5>Dodam coś 2</h5>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <h5>Dodam coś 3</h5>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Content;
