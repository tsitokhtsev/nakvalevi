import React from 'react'
import Heading from '../components/Heading'
import Period from '../components/timeline/Period'

const data = require('../data.json')

const Timeline = () => {
	const renderedPeriods = data.map(period =>
		<Period
			key={data.indexOf(period)}
			name={Object.keys(period)[0]}
			period={period}
		/>
	)

	return (
		<div className="timeline section">
			<Heading
				heading="თაიმლაინი"
				image="images/timeline.svg"
			/>
			{renderedPeriods}
		</div>
	)
}

export default Timeline