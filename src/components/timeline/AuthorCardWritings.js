import React from 'react'
import { Link } from 'react-router-dom'

const AuthorCardWritings = ({ author, writings }) => {
	const renderedWritings = writings.map(writing =>
		<Link
			key={`${author.id}${writing.id}`}
			to={`/${author.name}-${author.surname}/${writing.name.split(' ').join('-')}`}
		>
			<div className="author-card-writing">
				<span>{writing.name}</span>
				<span>{writing.year}</span>
			</div>
		</Link>
	)

	return (
		<div className="author-card-writings">
			{renderedWritings}
		</div>
	)
}

export default AuthorCardWritings
