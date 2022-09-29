import React from 'react';
import './Header.css';
import logo from '../../glogo.png'

const Header = () => {
    return (
        <div className=" header">
            <img  src={logo} alt="" />
            <p className="text-3xl font-bold text-primary">Strength and Fitness Palace</p>
        </div>
        
    );
};

export default Header;