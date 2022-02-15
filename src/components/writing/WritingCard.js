import React, { useState, useRef } from 'react'

const WritingCard = ({ title, content }) => {
	const [contentHeight, setContentHeight] = useState('0px')

	const contentRef = useRef(null)

	const handleClick = () => {
		contentHeight === '0px' ? setContentHeight(`${contentRef.current.scrollHeight}px`) : setContentHeight('0px')
	}

	return (
		<div className="writing-card">
			<div
				className="writing-card-header"
				onClick={handleClick}
			>
				<div className="writing-card-title">
					<span className="writing-card-title-text">{title}</span>
				</div>
				<button className="writing-card-button">
					<img src="/images/arrow.svg" alt="arrow" />
				</button>
			</div>
			<div
				className="writing-card-content"
				ref={contentRef}
				style={{ maxHeight: `${contentHeight}` }}
			>
				{content}
			</div>
		</div>
	)
}

export default WritingCard