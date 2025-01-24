import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid"> 
          <a className="navbar-brand" href="#"></a>       
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div 
            className="collapse navbar-collapse justify-content-center" 
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav text-center">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-link active custom-active-class" : "nav-link"
                }
                aria-current="page"
              >
                Strona Główna
              </NavLink>
              <NavLink 
                to="/Aboutme" 
                className={({ isActive }) => 
                  isActive ? "nav-link active custom-active-class" : "nav-link"
                }
                aria-current="page"
              >
                O mnie
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;