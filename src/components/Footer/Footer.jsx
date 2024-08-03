import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div class="footer">
                <div class="footer-logo">
                    <a href="https://github.com/zakiahmadd?tab=repositories" target="_blank"><i class='bx bxl-github'></i></a>
                    <a href="https://www.linkedin.com/in/zaki-ahmad-2a7b3424b/" target="_blank"><i class='bx bxl-linkedin-square'></i></a>
                    <Link to='/contact'><a href="#"><i class='bx bxs-envelope'></i></a></Link>
                    <a href="https://www.instagram.com/zakiahmaadd/" target="_blank"><i class='bx bxl-instagram-alt'></i></a>
                </div>
                <p>Copyright ©2024, All rights reserved </p>
            </div>
        </footer>
    )
}

export default Footer