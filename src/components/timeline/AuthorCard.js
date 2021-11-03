import React from 'react'
import AuthorCardBio from './AuthorCardBio'
import AuthorCardWritings from './AuthorCardWritings'

import '../../style/author-card.scss'

const AuthorCard = ({ author }) => {
	return (
		<div className="author-card">
			<hr />
			<AuthorCardBio
				id={author.id}
				name={author.name}
				surname={author.surname}
				year={author.year}
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