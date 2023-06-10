import React from 'react'
import { Link } from 'react-router-dom'

const links = {
    '': 'მთავარი',
    timeline: 'ქრონოლოგია',
    about: 'ჩვენ შესახებ',
}

const Header = () => {
    const renderLinks = () =>
        Object.keys(links).map((link) => (
            <Link to={`/${link}`} className="Header-NavbarLink">
                {links[link].toUpperCase()}
            </Link>
        ))

    return (
        <header className="Header">
            <div className="Header-Container Container">
                <Link className="Header-Logo" to="/">
                    <img src="images/logo_new.svg" alt="logo" />
                </Link>
                <nav className="Header-Navbar">{renderLinks()}</nav>
            </div>
        </header>
    )
}

export default Header
