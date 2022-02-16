import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Heading from '../components/Heading';
import WritingInfo from '../components/writing/WritingInfo';
import WritingCard from '../components/writing/WritingCard';
import { withData } from '../components/hoc/withData';

const Writing = ({ authors }) => {
	const [writing, setWriting] = useState(null);

	const { authorName, writingName } = useParams();

	useEffect(() => {
		const writing = authors.find((author) => author.name === authorName)
			.writings.find((writing) => writing.name === writingName);
		setWriting(writing);
	}, [authors, authorName, writingName]);

	const { name, year, genre, essay, characters, dictionary } = writing || {};

	return writing && (
		<div className="Writing section">
			<Heading text={name} />
			<WritingInfo
				authorName={authorName}
				year={year}
				genre={genre}
			/>
			{essay && (
				<WritingCard
					title="ანალიზი"
					content={essay.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
				/>
			)}
			{/* {characters && (
				<WritingCard
					title="პერსონაჟები"
					content={characters}
				/>
			)}
			{dictionary && (
				<WritingCard
					title="ლექსიკონი"
					content={dictionary}
				/>
			)} */}
		</div>
	);
};

export default withData(Writing);
