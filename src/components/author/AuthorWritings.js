import React from 'react'
import { Link } from 'react-router-dom'

const AuthorWritings = ({ author, writings }) => {
	const renderedWritings = writings.map(writing =>
		<Link
			key={writing.id}
			to={{
				pathname: `/author/${author.name}-${author.surname}/${writing.name.split(' ').join('-')}`,
				state: {
					authorId: author.id,
					writingId: writing.id,
				}
			}}
		>
			<div className="author-writing">
				<span>{writing.name}</span>
				<span className="author-writing-year">{writing.year}</span>
			</div>
		</Link>
	)

	return <div>{renderedWritings}</div>
}

export default AuthorWritings