import React from 'react'

import '../style/heading.scss'

const Heading = ({ heading, image }) => {
	return (
		<h1 className="heading">
			<span className="heading-text">{heading}</span>
			<img className="heading-image" src={image} alt={image} />
		</h1>
	)
}

export default Heading