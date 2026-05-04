import React from "react";
import { NavLink } from "react-router-dom";
import logo_red from '../assets/logo_red.png'
function Header() {
    
    return (
        <header className='header-container'>
            <NavLink  to="/">
                <img className='logo' src={logo_red} alt="logo kasa"/>
            </NavLink>
            <nav className="navbar">
                <div className="navlink">
                    <NavLink className="nav" to="/">Accueil</NavLink>
                </div>
                <div className="navlink">
                    <NavLink className="nav" to="/about">À Propos</NavLink>
                </div>
            </nav>
        </header>
       ) 
}
export default Header;