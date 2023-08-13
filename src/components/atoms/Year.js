import React from 'react'

const Year = ({ year }) => {
	const getFormattedYear = () => {
		if (year.includes('-')) {
			return year + ' წლები'
		}

		if (year.match(/[A-Z]/)) {
			return year
		}

		return year + ' წელი'
	}

	return <span>{getFormattedYear()}</span>
}

export default Year
