import React from 'react'
import { Link } from 'react-router-dom'

import '../style/navbar.scss'

const Navbar = ({ navbarExpanded, setNavbarExpanded }) => {
	return (
		<nav className="navbar" style={{ top: navbarExpanded ? '60px' : '16px' }}>
			<div className="container">
				<Link
					to="/"
					className="navbar-link"
					onClick={() => setNavbarExpanded(false)}
				>
					მთავარი
				</Link>

				<Link
					to="/timeline"
					className="navbar-link"
					onClick={() => setNavbarExpanded(false)}
				>
					თაიმლაინი
				</Link>

				<Link
					to="/about"
					className="navbar-link"
					onClick={() => setNavbarExpanded(false)}
				>
					ჩვენ შესახებ
				</Link>
			</div>
		</nav>
	)
}

export default Navbar