import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Navbar from './Navbar'
import Container from './Container'
import Home from '../pages/Home'
import Timeline from '../pages/Timeline'
import About from '../pages/About'
import Author from '../pages/Author'
import Writing from '../pages/Writing'
import Footer from './Footer'

import '../style/app.scss'

const App = () => {
	const [navbarExpanded, setNavbarExpanded] = useState(false)
	const [scroll, setScroll] = useState(window.pageYOffset)

	window.onscroll = () => setScroll(window.pageYOffset)

	return (
		<div
			className="app"
			style={{ paddingTop: navbarExpanded && scroll < 5 ? '85px' : '40px' }}
		>
			<BrowserRouter>
				<Header
					navbarExpanded={navbarExpanded}
					setNavbarExpanded={setNavbarExpanded}
				/>
				<Navbar
					navbarExpanded={navbarExpanded}
					setNavbarExpanded={setNavbarExpanded}
				/>
				<Container>
					<Route path="/" exact component={Home} />
					<Route path="/timeline" exact component={Timeline} />
					<Route path="/about" exact component={About} />
					<Route path="/:authorName-:authorSurname" exact component={Author} />
					<Route path="/:authorName-:authorSurname/:writingName" exact component={Writing} />
				</Container>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
