import React from "react";
import "./Header.css";
import HeaderItem from "./Header Item/HeaderItem";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <div className="header">
            <nav>
                <img src={logo} alt="Logo"/>
                    <div className="nav-links">
                        <HeaderItem text="Home" to='/home' />
                        <HeaderItem text="Posts" to='/posts' />
                        <HeaderItem text="Projects" to='/projects' />
                        <HeaderItem text="About" to='/about' />
                        <HeaderItem text="Contact" to='/contact' />
                    </div>
            </nav>
            <hr className="fancy-hr" />
        </div>
    )
}

export default Header;