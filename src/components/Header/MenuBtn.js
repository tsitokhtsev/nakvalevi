import React from 'react'
import './btn.scss'
import menuImg from './menu.svg'

const MenuBtn = ({ navbarExpanded, setNavbarExpanded }) => {
	return (
		<div
			className="menu-btn"
			alt="menu"
			style={{
				background: `url(${menuImg}) no-repeat`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
			onClick={() => { setNavbarExpanded(!navbarExpanded) }}
		/>
	)
}

export default MenuBtn