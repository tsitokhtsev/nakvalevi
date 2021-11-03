import React from 'react'
import { Link } from 'react-router-dom'
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

				<Link className="logo"to="/">
					<img src="/images/logo.png" alt="logo" />
				</Link>
				
				<SearchBtn />
			</div>
		</header>
	)
}

export default Header