import React from 'react'
import logo from '../logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="logo">
                <img className="logo-img" src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Navbar

