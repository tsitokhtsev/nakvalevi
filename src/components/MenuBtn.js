import React from 'react'
import '../style/btn.scss'

const MenuBtn = ({ navbarExpanded, setNavbarExpanded }) => {
	return (
		<div
			className="menu-btn"
			alt="menu"
			style={{
				background: 'url(/images/menu.svg) no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
			onClick={() => { setNavbarExpanded(!navbarExpanded) }}
		/>
	)
}

export default MenuBtn