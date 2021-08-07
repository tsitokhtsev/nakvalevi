import React from 'react'

const AuthorCardBio = ({ name, surname, year, link, imagePath }) => {
	return (
		<a href={link}>
			<div className="author-card-bio">
				<div className="author-card-bio-info">
					<span className="author-card-bio-info-name">{name}<br />{surname}</span>
					<span className="author-card-bio-info-years">{year}</span>
					<img className="author-card-bio-info-img" src={imagePath} alt="portrait" />
				</div>
			</div>
		</a>
	)
}

export default AuthorCardBio