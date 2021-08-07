import React from 'react'
import AuthorCardBio from './AuthorCardBio'
import AuthorCardWritings from './AuthorCardWritings'

const AuthorCard = ({ author }) => {
	return (
		<div className="author-card">
			<hr />
			<AuthorCardBio
				name={author.name}
				surname={author.surname}
				year={author.year}
				url={author.url}
				imagePath={author.imagePath}
				/>
			<hr />
			<AuthorCardWritings
				writings={author.writings}
			/>
		</div>
	)
}

export default AuthorCard