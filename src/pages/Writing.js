import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Heading from '../components/Heading';
import WritingInfo from '../components/writing/WritingInfo';
import WritingCard from '../components/writing/WritingCard';
import { writingCardContentMap } from '../components/writing/Writing.config';
import { withData } from '../components/hoc/withData';

const Writing = ({ authors }) => {
	const [writing, setWriting] = useState(null);
	const [isOpen, setIsOpen] = useState(Object.keys(writingCardContentMap)[0]);

	const { authorName, writingName } = useParams();

	useEffect(() => {
		const writing = authors.find((author) => author.name === authorName)
			.writings.find((writing) => writing.name === writingName);
		setWriting(writing);
	}, [authors, authorName, writingName]);

	const { name, year, genre } = writing || {};

	return writing && (
		<div className="Writing section">
			<Heading text={name} />
			<WritingInfo
				authorName={authorName}
				year={year}
				genre={genre}
			/>
			{Object.entries(writingCardContentMap).map(([key, value]) => {
				const content = writing[value.toLowerCase()];

				return content && (
					<WritingCard
						key={key}
						title={key}
						content={content}
						isOpen={isOpen === key}
						setIsOpen={setIsOpen}
					/>
				);
			})}
		</div>
	);
};

export default withData(Writing);
