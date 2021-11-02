import React from 'react'
import AuthorCard from './AuthorCard'

const Period = ({ name, authors }) => {
	const renderedAuthors = authors.map(author =>
		<AuthorCard
			key={author.id}
			author={author}
		/>
	)

	return (
		<div className="period">
			{renderedAuthors}
		</div>
	)
}

export default Period