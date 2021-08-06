import React from "react";
import "./header.scss";
import logo from "../../logo.png";
import MenuBtn from "./MenuBtn";
import SearchBtn from "./SearchBtn";

const Header = ({ navbarExpanded, setNavbarExpanded }) => {
	return (
		<header className="header">
			<div className="container">
				<MenuBtn
					navbarExpanded={navbarExpanded}
					setNavbarExpanded={setNavbarExpanded}
				/>
				<img className="logo" src={logo} alt="logo" />
				<SearchBtn />
			</div>
		</header>
	);
};

export default Header;