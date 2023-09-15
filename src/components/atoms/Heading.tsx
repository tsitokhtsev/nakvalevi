import React from 'react'

const sizeClasses = {
	1: 'text-5xl',
	2: 'text-4xl',
	3: 'text-3xl'
}

interface HeadingProps {
	text: string
	size?: 1 | 2 | 3
	classes?: string
}

const Heading: React.FC<HeadingProps> = ({ text, size = 1, classes }) => {
	const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements

	return (
		<HeadingTag
			className={`${sizeClasses[size]} -mb-4 font-bold leading-tight text-green-dark ${classes}`}
		>
			{text.toUpperCase()}
		</HeadingTag>
	)
}

export default Heading
