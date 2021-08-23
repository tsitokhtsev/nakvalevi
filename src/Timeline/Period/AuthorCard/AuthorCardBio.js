import React from 'react'

const AuthorCardBio = ({ name, surname, year, url, imagePath }) => {
	return (
		<a href={url}>
			<div className="author-card-bio">
				<div className="author-card-bio-info">
					<span className="author-card-bio-info-name">{name}<br />{surname}</span>
					<span className="author-card-bio-info-year">{year}</span>
				</div>
				<img className="author-card-bio-img" src={imagePath} alt="portrait" />
			</div>
		</a>
	)
}

export default AuthorCardBio