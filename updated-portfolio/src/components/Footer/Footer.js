import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <nav className="navbar sticky-bottom navbar-light bg-light d-block text-center">
                <a href="https://www.linkedin.com/in/brookeparrish/" target="_blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a className="pl-1" href="https://www.github.com/brookeparrish/" target="_blank">
                    <i className="fab fa-github fa-2x"></i>
                </a>
        </nav>
    );
}

export default Footer;