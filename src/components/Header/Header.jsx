import React from "react";
import "./Header.css";
import HeaderItem from "./Header Item/HeaderItem";
import unpadLogo from "../../assets/logo-unpad.png";

function Header() {
    return (
        <div className="header">
            <nav>
                <img src={unpadLogo} alt="Logo"/>
                    <div className="nav-links">
                        <HeaderItem text="Home" href="index.html" />
                        <HeaderItem text="Posts" href="posts.html" />
                        <HeaderItem text="Projects" href="projects.html" />
                        <HeaderItem text="About" href="about.html" />
                        <HeaderItem text="Contact" href="contact.html" />
                    </div>
            </nav>
            <hr className="fancy-hr" />
        </div>
    )
}

export default Header;