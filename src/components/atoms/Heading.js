import React from 'react'

const sizeClasses = {
	1: 'text-5xl',
	2: 'text-4xl',
	3: 'text-3xl'
}

const Heading = ({ text, size = 1 }) => {
	const HeadingTag = `h${size}`

	return (
		<HeadingTag
			className={`${sizeClasses[size]} -mb-4 font-bold leading-tight text-green-dark`}
		>
			{text.toUpperCase()}
		</HeadingTag>
	)
}

export default Heading
