import React from "react";
import './NavBar.css';
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {RxDividerVertical} from 'react-icons/rx'

const Navbar = () => {
    return (
        <nav className="navbar-content">
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-contact">
                <a href="tel:2159270945">Call Now: (215) 927-0945</a>
                <a href="">7411 Stenton Av, Philadephia PA</a>
            </div>
        </nav>
    );
};

export default Navbar;