import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Offer() {
    return (
        <div>
            <Header />
            <div className="introduction intro">
                <motion.h1
                    className="intro-text intro-text-mobile"
                    style={{ fontSize: "2.5vw" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        duration: 1,
                    }}
                >
                    Nigdzie taniej nie znajdziesz!
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
                    Jeśli szukasz niedrogiej, ale w pełni profesjonalnej strony internetowej wizytówki, to trafiłeś w idealne miejsce! 
                    Tworzę strony w naprawdę atrakcyjnych cenach, nie rezygnując przy tym z jakości. Wiem, jak ważny jest budżet, 
                    szczególnie dla małych firm, startupów czy osób prywatnych, dlatego oferuję tanie rozwiązania, które pomogą Ci zaistnieć w Internecie bez wielkich wydatków.
                </motion.p>
            </div>

            <div className="cards-container">
                <motion.div
                    className="me-info me-container card-info me-info-img"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay: 0 * 0.6,
                    }}
                    viewport={{ once: true }}
                >
                    <p className="text-in-card">Strony internetowe już od 399 zł!</p>
                    <p className="lower-cardtext">W pełni responsywne strony, automatycznie dostosowujące się do każdego urządzenia. Czas realizacji od 7-10 dni. Nie czekaj 
                        tylko już dziś wyróżnij swoją firmę w sieci</p>
                    
                </motion.div>
                <motion.div
                    className="me-info me-container card-info me-info-img"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay: 1 * 0.6,
                    }}
                    viewport={{ once: true }}
                >
                    <p className="text-in-card">Tyle podstron ile sobie zażyczysz!</p>
                    <p className="lower-cardtext">Każda z nich zaprojektowana z uwzględnieniem Twoich potrzeb, by skutecznie przekazywać treści i angażować użytkowników 
                         </p>
                </motion.div>
                <motion.div
                    className="me-info me-container card-info"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay: 2 * 0.6,
                    }}
                    viewport={{ once: true }}
                >
                    <p className="text-in-card">Profesjonalne animacje!</p>
                    <p className="lower-cardtext">Tworzę dynamiczne i angażujące animacje, które wzbogacają wizualną stronę projektu i przyciągają uwagę użytkowników</p>
                </motion.div>
                <motion.div
                    className="me-info me-container card-info me-info-img host"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay: 3 * 0.6,
                    }}
                    viewport={{ once: true }}
                >
                    <p className="text-in-card">Hosting</p>
                    <p className="lower-cardtext">Oferuje sprawdzone rozwiązania hostingowe, zapewniające szybki dostęp do Twojej witryny i jej wysoką wydajność</p>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}

export default Offer;