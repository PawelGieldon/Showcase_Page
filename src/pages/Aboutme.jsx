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
                        <h1>Więcej informacji o mnie</h1>
                        <FaArrowDownLong className="arrow"/>
                    </div>
            </div>
            <div className="me-container">
                <h3>No i tutaj będe pisał coś o mnie, ghghfghfghgfhfghfgfgdfgfdgdfg</h3>
            </div>
            <Footer/>
        </div>
    )
}

export default Aboutme