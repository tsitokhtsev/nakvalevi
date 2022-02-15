import React from 'react';

import Heading from '../components/Heading';
import AuthorCard from '../components/timeline/AuthorCard';
import { withData } from '../components/hoc/withData';

const periods = ['old', 'new', 'newest'];

const Timeline = ({ authors }) => {
	return (
		<div className="timeline section">
			<Heading
				text="თაიმლაინი"
				image="images/timeline.svg"
			/>
			{periods.map(period => (
				<div key={period} className="period">
					{authors.filter((author) => author.period === period).map((author) => (
						<AuthorCard key={author.name} author={author} />
					))}
				</div>
			))}
		</div>
	);
};

export default withData(Timeline);
