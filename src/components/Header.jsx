import React from "react";
import { Link } from "react-router-dom";

function Header() {
     
return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid ">        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav text-center">
              <Link to="/" className="nav-link " aria-current="page">Strona Główna</Link>
              <Link to="/Aboutme" className="nav-link " aria-current="page">O mnie</Link>
              <Link to="/Aboutme" className="nav-link " aria-current="page">O mnie</Link>       
            </div>
          </div>
        </div>
      </nav>
    </div>
)

}

export default Header