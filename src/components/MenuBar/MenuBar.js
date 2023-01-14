import React from "react";
import './Menubar.css';
import images from '../../constants/images';

const Menubar = () => {
    return (
        <div className="menubar">
            <div className="navbar-logo">
                <img src={images.logo} alt="logo"/>
            </div>
            
        </div>
    );
};

export default Menubar;
