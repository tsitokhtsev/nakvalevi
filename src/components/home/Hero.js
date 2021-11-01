import React from 'react'
import '../../style/hero.scss'

const Hero = () => {
	// if (window.innerWidth < 480) {
	// 	let heroHight = window.innerHeight - 90
	// 	hero.style.height = `${heroHight}px`
	// 	heroContainerBottom.style.height = `${heroHight - 225}px`
	// } else {
	// 	hero.style.height = `${window.innerHeight - 190}px`
	// }

	return (
		<div className="hero section" style={{ height: window.innerHeight - 220 }}>
			<div className="hero-container" style={{background: 'url("images/books.jpg")'}}>
				<h1 className="hero-title">
					<p className="hero-title-word">გავკვალოთ</p>
					<p className="hero-title-word">ცოდნის</p>
					<p className="hero-title-word">გზა</p>
				</h1>
				<div className="hero-container-right"></div>
				<div className="hero-container-bottom"></div>
			</div>
		</div>
	)
}

export default Hero