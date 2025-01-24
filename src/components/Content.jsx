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
        <h1 className="intro-text">
          Pierwsze Wrażenie Liczy się w Sieci - Zbuduj Je z Naszą Stroną Wizytówką
        </h1>
      </div>
      <div className="second-img-container">
        <motion.div ref={textRef} style={{ x: textX }} className="text-button">
          <p className="about-me">
            <span>Nazywam się Paweł</span> i jestem pasjonatem tworzenia interaktywnych i estetycznych stron internetowych jako front-end developer. 
            Specjalizuję się w łączeniu nowoczesnych technologii z kreatywnym podejściem do projektowania, tworząc witryny, które nie tylko wyglądają świetnie, 
            ale też działają bez zarzutu.
          </p>
          <Link to="/Aboutme" className="nav-link " aria-current="page">
            <button
              type="button"
              className="btn btn-animated px-4 py-2"
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
        <motion.p ref={h2Ref} style={{ x: h2X }} className="about-me"
        >
          <span>Zwiększ zyski swojego biznesu dzięki profesjonalnej stronie internetowej </span> 
           Tworzę strony internetowe, które nie tylko przyciągają uwagę, ale przede wszystkim 
          przyczyniają się do wzrostu Twoich zysków. Moje projekty są dostosowane do specyfiki Twojego biznesu, 
          zapewniając optymalizację pod kątem konwersji i efektywności. Dzięki nowoczesnym technologiom, estetycznemu designowi i intuicyjnej obsłudze, 
          Twoja strona stanie się narzędziem, które przyciąga nowych klientów, buduje lojalność i zwiększa sprzedaż.
        </motion.p>
      </div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <h5>W pełni Responsywna strona!</h5>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <h5>Projekt tworzony za pomocą najnowszych technologii</h5>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <h5>Wyjątkowa jakość za niską cenę!</h5>
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
