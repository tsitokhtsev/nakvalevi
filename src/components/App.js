import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar';
import Container from './Container';
import Home from '../pages/Home';
import Timeline from '../pages/Timeline';
import About from '../pages/About';
import Author from '../pages/Author';
import Writing from '../pages/Writing';
import Footer from './Footer';

import '../style/app.scss';

const App = () => {
	const [navbarExpanded, setNavbarExpanded] = useState(false);
	const [scroll, setScroll] = useState(window.pageYOffset);

	window.onscroll = () => setScroll(window.pageYOffset);

	return (
		<div
			className="app"
			style={{ paddingTop: navbarExpanded && scroll < 5 ? '85px' : '40px' }}
		>
			<Header
				navbarExpanded={navbarExpanded}
				setNavbarExpanded={setNavbarExpanded}
			/>
			<Navbar
				navbarExpanded={navbarExpanded}
				setNavbarExpanded={setNavbarExpanded}
			/>
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/timeline" element={<Timeline />} />
					<Route path="/about" element={<About />} />
					<Route path="/:authorName-:authorSurname" element={<Author />} />
					<Route path="/:authorName-:authorSurname/:writingName" element={<Writing />} />
				</Routes>
			</Container>
			<Footer />
		</div>
	);
};

export default App;
