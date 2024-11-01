import React from 'react';
import '../styles/Footer.css'

function Footer() {
    // Return 3 linked icons for email, LinkedIn, and GitHub
    return (
        <footer>
            <a href="mailto:avanimuchhala1@gmail.com"><i className="fa-solid fa-envelope footer-icon"></i></a>
            <a href="https://www.linkedin.com/in/avanimuchhala/" target="_blank"><i className="fa-brands fa-linkedin footer-icon"></i></a>
            <a href="https://github.com/AvaniMuchhala" target="_blank"><i className="fa-brands fa-github footer-icon"></i></a>
        </footer>
    )
}

export default Footer;