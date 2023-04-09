import React from "react";
import EyeLogo from "../assets/eye-logo.png"

export default function Navbar() {
    
    return (
        <nav>
            <div className="logo-wrap">
                 <img className="eye-logo" src={EyeLogo} alt="eye logo" />
            <div className="logo-text">The Eye Store</div>
            </div>
            <ul className="nav-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="icon">&#9776;</div>

        </nav> 
        
    )

    
}