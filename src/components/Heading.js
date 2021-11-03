import React from 'react'

import '../style/heading.scss'

const Heading = ({ text, subtext, image }) => {
	return (
		<h1 className="heading">
			<div className="heading-left">
				<span className="heading-text">{text}</span>
				<span className="heading-subtext">{subtext}</span>
			</div>
			<img className="heading-image" src={image} alt={image} />
		</h1>
	)
}

export default Heading