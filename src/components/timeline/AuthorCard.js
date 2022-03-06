import React from 'react';
import { Link } from 'react-router-dom';

import { withData } from '../hoc/withData';
import '../../style/author-card.scss';

const AuthorCard = ({ author, writings }) => {
	const { name, year, imagePath } = author;

	return (
		<div className="author-card">
			<hr />
			<Link to={`/${name}`}>
				<div className="author-card-bio">
					<div className="author-card-bio-info">
						<span className="author-card-bio-info-name">{name}</span>
						<span className="author-card-bio-info-year">{year}</span>
					</div>
					<img className="author-card-bio-img" src={imagePath} alt="portrait" />
				</div>
			</Link >
			<hr />
			<div className="author-card-writings">
				{writings
					.filter((writing) => writing.author === name)
					.map((writing) => (
						<Link
							key={writing.name}
							to={`/${name}/${writing.name}`}
						>
							<div className="author-card-writing">
								<span>{writing.name}</span>
								<span>{writing.year}</span>
							</div>
						</Link>
					))
				}
			</div>
		</div>
	);
};

export default withData(AuthorCard);
