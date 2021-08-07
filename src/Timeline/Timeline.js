import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading/Heading'
import Period from './Period/Period'

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
		<Container>
			<div className="timeline section">
				<Heading
					heading="თაიმლაინი"
					image="images/timeline.svg"
				/>
				{renderedPeriods}
			</div>
		</Container>
	)
}

export default Timeline