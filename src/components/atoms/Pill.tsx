import React from 'react'

const types = {
	period: 'border-yellow bg-yellow',
	genre: 'border-green bg-green'
}

interface PillProps {
	text: string
	type: 'period' | 'genre'
}

const Pill: React.FC<PillProps> = ({ text, type }) => {
	return (
		<span
			className={`rounded-full border border-solid bg-opacity-50 px-2 py-1 text-xs ${types[type]}`}
		>
			{text}
		</span>
	)
}

export default Pill
