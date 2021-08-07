import React, { useState } from 'react'
import './app.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Route from './components/Route'
import Home from './Home/Home'
import Timeline from './Timeline/Timeline'
import About from './About/About'

const App = () => {
	const [navbarExpanded, setNavbarExpanded] = useState(false)
	const [scroll, setScroll] = useState(window.pageYOffset)

	window.onscroll = () => setScroll(window.pageYOffset)

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
			/>
			<Route path="/">
				<Home />
			</Route>
			<Route path="/timeline">
				<Timeline />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Footer />
		</div>
	)
}

export default App