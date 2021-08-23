import React from 'react'

const AuthorCardWriting = ({ name, url, year }) => {
	return (
		<a href={url}>
			<div className="author-card-writing">
				<span>{name}</span>
				<span>{year}</span>
			</div>
		</a>
	)
}

export default AuthorCardWriting