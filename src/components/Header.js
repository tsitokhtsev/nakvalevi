import React from 'react'
import MenuBtn from './MenuBtn'
import SearchBtn from './SearchBtn'

import "../style/header.scss"

const Header = ({ navbarExpanded, setNavbarExpanded }) => {
	return (
		<header className="header">
			<div className="container">
				<MenuBtn
					navbarExpanded={navbarExpanded}
					setNavbarExpanded={setNavbarExpanded}
				/>
				<img className="logo" src="images/logo.png" alt="logo" />
				<SearchBtn />
			</div>
		</header>
	)
}

export default Header