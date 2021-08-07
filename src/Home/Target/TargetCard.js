import React from 'react'

const TargetCard = ({ image, text }) => {
	return (
		<div className="target-card">
			<img className="target-card-image" src={image} alt={image} />
			<div className="target-card-text">
				<p>{text}</p>
			</div>
		</div>
	)
}

export default TargetCard