import React from 'react'
import AuthorCardWriting from './AuthorCardWriting'

const AuthorCardWritings = ({ writings }) => {
	// FIXME: fetchWritings
	const renderedWritings = writings.map(writing =>
		<AuthorCardWriting
			key={writings.indexOf(writing)}
			name={writing.name}
			url={writing.url}
			year={writing.year}
		/>
	)

	return (
		<div className="author-card-writings">
			{renderedWritings}
		</div>
	)
}

export default AuthorCardWritings
