import React from 'react'
import './heading.scss'

const Heading = ({ heading }) => {
	return (
		<h1 className="heading">
			<span className="heading-text">{heading}</span>
		</h1>
	)
}

export default Heading