import React from 'react'
import logo from "../../assets/cardimage/logo.svg";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='nav-div'>
            <Link to="/"><img style={{ cursor: "pointer" }} src={logo} alt="logo" /></Link>
        </nav>
    )
}

export default Navbar;
