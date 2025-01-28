import React from "react";
import Header from "../components/Header";
import { FaArrowDownLong } from "react-icons/fa6";
import Footer from "../components/Footer";
import { MdOutlineComputer } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { IoIosStarOutline } from "react-icons/io";
import { TbWorldQuestion } from "react-icons/tb";
import { LuBicepsFlexed } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'; // importujemy poprawnie useInView

function Aboutme() {
  // Hooki dla każdej sekcji "difference-wrapper"
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, // Zdarzenie uruchamia się tylko raz
    threshold: 0.2, // Element wchodzi w widok przy 20% widoczności
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div>
      <Header />
      <div className="introduction intro">
        <motion.h1
          className="intro-text"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
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

      {/* Kontener me-info z wszystkimi sekcjami difference-wrapper */}
      <motion.div
        className="me-container me-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="difference-wrapper"
          ref={ref1}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView1 ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="icons-wrapper">
            <MdOutlineComputer />
            <h3> Co mnie wyróżnia?</h3>
          </div>
          <p>
            - Znajomość najnowszych technologii front-endowych, takich jak HTML5, CSS3, JavaScript, React oraz Bootstrap
          </p>
          <p>- Tworzenie responsywnych projektów dostosowanych do urządzeń mobilnych</p>
          <p>- Dbałość o szczegóły i intuicyjność interfejsu użytkownika </p>
        </motion.div>

        <motion.div
          className="difference-wrapper"
          ref={ref2}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView2 ? 1 : 0 }}
          transition={{ duration: 1.2}}
        >
          <div className="icons-wrapper">
            <IoIosStarOutline />
            <h3> Dlaczego to robię?</h3>
          </div>
          <p>
            Projektowanie stron to dla mnie coś więcej niż praca - to moja pasja. Uwielbiam wyzwania, które pozwalają mi rozwijać swoje
            umiejętności, i czerpię ogromną satysfakcję z dostarczania rozwiązań, które spełniają potrzeby klientów.
          </p>
        </motion.div>

        <motion.div
          className="difference-wrapper"
          ref={ref3}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView3 ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="icons-wrapper">
            <TbWorldQuestion />
            <h3> Moja misja</h3>
          </div>
          <p>
            Pomagam firmom i osobom prywatnym zaistnieć w sieci, tworząc strony internetowe, które robią wrażenie, wzmacniają wizerunek i
            przynoszą realne efekty.
          </p>
        </motion.div>

        <motion.div
          className="difference-wrapper"
          ref={ref4}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView4 ? 1 : 0 }}
          transition={{ duration: 1.2}}
        >
          <div className="icons-wrapper">
            <LuBicepsFlexed />
            <h3> Co mnie motywuje?</h3>
          </div>
          <p>
            Uwielbiam obserwować, jak moje projekty przyczyniają się do sukcesu moich klientów. Każdy projekt to dla mnie okazja do
            stworzenia czegoś wyjątkowego - rozwiązania, które wywiera wpływ i budzi emocje.
          </p>
        </motion.div>

        <motion.div
          className="difference-wrapper"
          ref={ref5}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView5 ? 1 : 0 }}
          transition={{ duration:1.2 }}
        >
          <div className="icons-wrapper">
            <PiStudent className="student" />
            <h3> Moje podejście do rozwoju i ciągłego uczenia się</h3>
          </div>
          <p>
            Technologia rozwija się w zawrotnym tempie, dlatego nieustannie inwestuję w swój rozwój. Regularnie uczestniczę w
            konferencjach, webinarach oraz warsztatach, aby pozostać na czołowej pozycji w branży. Moją pasją jest również eksperymentowanie
            z nowymi narzędziami i technologiami, co pozwala mi dostarczać najnowsze rozwiązania, które najlepiej odpowiadają na potrzeby
            moich klientów.
          </p>
        </motion.div>

        <motion.div
          className="difference-wrapper"
          ref={ref6}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView6 ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="icons-wrapper">
            <MdMailOutline />
            <h3> Zachęcam do kontaktu </h3>
          </div>
          <p>Razem stworzymy coś niezwykłego!</p>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Aboutme;