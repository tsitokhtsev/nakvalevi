import React from 'react'

const types = {
	period: 'border-yellow bg-yellow',
	genre: 'border-green bg-green'
}

const Pill = ({ text, type }) => {
	return (
		<span
			className={`rounded-full border border-solid bg-opacity-50 px-2 py-1 text-xs ${types[type]}`}
		>
			{text}
		</span>
	)
}

export default Pill
