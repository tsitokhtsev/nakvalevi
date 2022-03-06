import React from 'react';
import { Link } from 'react-router-dom';

import MenuButton from './MenuButton';
import Search from './Search';

import "../style/header.scss";

const Header = ({ navbarExpanded, setNavbarExpanded }) => {
	return (
		<header className="header">
			<div className="container">
				<MenuButton
					navbarExpanded={navbarExpanded}
					setNavbarExpanded={setNavbarExpanded}
				/>
				<Link className="logo" to="/">
					<img src="/images/logo.png" alt="logo" />
				</Link>
				<Search />
			</div>
		</header>
	);
};

export default Header;
