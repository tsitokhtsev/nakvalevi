import React from 'react'
import AuthorCard from './AuthorCard/AuthorCard'

const Period = ({ name, period }) => {
	const authors = period[name]

	const renderedAuthors = authors.map(author =>
		<AuthorCard
			key={authors.indexOf(author)}
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