import React from 'react'
import './navbar.scss'
import Link from './Link'

const Navbar = ({ navbarExpanded }) => {
	return (
		<nav className="navbar" style={{ top: navbarExpanded ? '60px' : '16px' }}>
			<div className="container">
				<Link href="/" className="navbar-link">მთავარი</Link>
				<Link href="/timeline" className="navbar-link">თაიმლაინი</Link>
				<Link href="/about" className="navbar-link">ჩვენ შესახებ</Link>
			</div>
		</nav>
	)
}

export default Navbar