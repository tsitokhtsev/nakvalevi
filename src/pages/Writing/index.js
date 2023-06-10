import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Heading from 'components/atoms/Title';
import WritingInfo from 'pages/Writing/WritingInfo';
import WritingCard from 'pages/Writing/WritingCard';
import { writingCardContentMap } from 'pages/Writing/Writing.config';
import { withData } from 'hoc/withData';

const Writing = ({ writings }) => {
	const [writing, setWriting] = useState(null);
	const [isOpen, setIsOpen] = useState(Object.keys(writingCardContentMap)[0]);

	const { writingName } = useParams();

	useEffect(() => {
		const writing = writings.find((writing) => writing.name === writingName)
		setWriting(writing);
	}, [writings, writingName]);

	const { name, author, year, genre } = writing || {};

	return writing && (
		<div className="Writing section">
			<Heading text={name} />
			<WritingInfo
				authorName={author}
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
