import React from "react";
import Header from "../components/Header";
import { FaArrowDownLong } from "react-icons/fa6";
import Footer from "../components/Footer";

function Aboutme() {
    return (
        <div>
            <Header/>
            <div className="introduction intro">                           
                    <div className="arrow-container">
                        <h1>Dowiedz się więcej o mnie</h1>
                        <FaArrowDownLong className="arrow"/>
                    </div>
            </div>
            <div className="me-container me-info">
                <h3>💻 Co mnie wyróżnia?</h3>
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