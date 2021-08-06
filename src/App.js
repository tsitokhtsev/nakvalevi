import React, { useState } from 'react'
import './app.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Route from './components/Route'
import Home from './Home/Home'
import Timeline from './Timeline/Timeline'
import About from './About/About'

const App = () => {
	const [navbarExpanded, setNavbarExpanded] = useState(false)

	return (
		<div className="app">
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
		</div>
	)
}

export default App