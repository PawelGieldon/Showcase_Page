import React from "react";
import Header from "../components/Header";
import { FaArrowDownLong } from "react-icons/fa6";
import Footer from "../components/Footer";
import { MdOutlineComputer } from "react-icons/md";
import {
    motion,
    useScroll,
    useMotionValueEvent,
    useTransform,
    useInView,
    useAnimation,
  } from "framer-motion";

function Aboutme() {
    return (
        <div>
            <Header/>
            <div className="introduction intro">                              
                <motion.h1 className="intro-text"
                initial={{ opacity: 0, scale: 0.6 }} // Zmniejszenie i ukrycie na początku
                animate={{ opacity: 1, scale: 1 }} // Pełna widoczność i powrót do normalnego rozmiaru
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 1,
                }}
      
                
                >
                Dowiedz się więcej o mnie
                </motion.h1>
                <motion.div
                    className="arrow"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 10, opacity: 1 }}
                    transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    }}
                >
                    <FaArrowDownLong />
                </motion.div>    
            </div>
            <div className="me-container me-info">
                <div className="computer-wrapper">
                    <MdOutlineComputer />
                    <h3> Co mnie wyróżnia?</h3>  
                </div>
                <p>- Znajomość najnowszych technologii front-endowych, takich jak HTML5, CSS3, JavaScript, React oraz Bootstrap</p>
                <p>- Tworzenie responsywnych projektów dostosowanych do urządzeń mobilnych</p>
                <p>- Dbałość o szczegóły i intuicyjność interfejsu użytkownika </p>
                <h3>🌟 Dlaczego to robię?</h3>
                <p>Projektowanie stron to dla mnie coś więcej niż praca - to moja pasja. Uwielbiam wyzwania, które pozwalają mi rozwijać swoje umiejętności, 
                    i czerpię ogromną satysfakcję z dostarczania rozwiązań, które spełniają potrzeby klientów.</p>
                <h3>🌐 Moja misja</h3>
                <p>Pomagam firmom i osobom prywatnym zaistnieć w sieci, tworząc strony internetowe, które robią wrażenie, wzmacniają wizerunek i przynoszą realne efekty.</p>
                <h3>🚀 Co mnie motywuje?</h3>
                <p>Uwielbiam obserwować, jak moje projekty przyczyniają się do sukcesu moich klientów. 
                    Każdy projekt to dla mnie okazja do stworzenia czegoś wyjątkowego - rozwiązania, które wywiera wpływ i budzi emocje.</p>
                <h3>🌱 Moje podejście do rozwoju i ciągłego uczenia się</h3>
                <p>Technologia rozwija się w zawrotnym tempie, dlatego nieustannie inwestuję w swój rozwój. Regularnie uczestniczę w konferencjach, 
                    webinarach oraz warsztatach, aby pozostać na czołowej pozycji w branży. Moją pasją jest również eksperymentowanie z nowymi narzędziami i technologiami, 
                    co pozwala mi dostarczać najnowsze rozwiązania, które najlepiej odpowiadają na potrzeby moich klientów.</p>
                <h3>📩 Zachęcam do kontaktu </h3>
                <p>Razem stworzymy coś niezwykłego!</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Aboutme