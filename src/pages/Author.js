import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Heading from 'components/atoms/Title';
import { withData } from 'hoc/withData';

const Author = ({ authors, writings }) => {
	const [author, setAuthor] = useState(null);

	const { authorName } = useParams();

	useEffect(() => {
		const author = authors.find((author) => author.name === authorName);
		setAuthor(author);
	}, [authors, authorName]);

	const { name, year, imagePath } = author || {};

	return author && (
		<div className="author section">
			<Heading
				text={name}
				subtext={year}
				image={imagePath}
			/>
			<div className="author-writings">
				{writings
					.filter((writing) => writing.author === name)
					.map((writing) => (
						<Link key={writing.name} to={writing.name}>
							<div className="author-writing">
								<span>{writing.name}</span>
								<span className="author-writing-year">{writing.year}</span>
							</div>
						</Link>
					))
				}
			</div>
		</div>
	);
};

export default withData(Author);
