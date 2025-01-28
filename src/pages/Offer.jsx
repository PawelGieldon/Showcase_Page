import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Offer () {
    return (
        <div>
            <Header/>
            <div className="introduction intro">
                <motion.h1
                    className="intro-text intro-text-mobile"
                    style={{fontSize:"2.5vw"}}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    duration: 1,
                    }}
                >
                    Nigdzie taniej nie znajdziesz !
                </motion.h1>
                <motion.p
                    className="offer-text"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    duration: 1,
                    }}
                >
                    Jeśli szukasz niedrogiej, ale w pełni profesjonalnej strony internetowej, to trafiłeś w idealne miejsce! 
                    Tworzę strony internetowe w naprawdę atrakcyjnych cenach, nie rezygnując przy tym z jakości. Wiem, jak ważny jest budżet, 
                    szczególnie dla małych firm, startupów czy osób prywatnych, dlatego oferuję tanie rozwiązania, które pomogą Ci zaistnieć w Internecie bez wielkich wydatków.
                </motion.p>
            </div>

            <div className="cards-container">
                <div className="me-info me-container card-info" >
                    <p className="text-in-card">Strony internetowe już od 399 zł !</p>
                    <p></p>
                </div>
                <div className="me-info me-container card-info" >
                    <p className="text-in-card">Strony internetowe już od 399 zł !</p>
                    <p></p>
                </div>
                <div className="me-info me-container card-info" >
                    <p className="text-in-card">Strony internetowe już od 399 zł !</p>
                    <p></p>
                </div>
                <div className="me-info me-container card-info" >
                    <p className="text-in-card">Strony internetowe już od 399 zł !</p>
                    <p></p>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Offer