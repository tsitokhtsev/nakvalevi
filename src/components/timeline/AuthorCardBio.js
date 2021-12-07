import React from 'react'
import { Link } from 'react-router-dom'

const AuthorCardBio = ({ id, name, surname, year, imagePath }) => {
	return (
		<Link to={`/${name}-${surname}`}>
			<div className="author-card-bio">
				<div className="author-card-bio-info">
					<span className="author-card-bio-info-name">{name}<br />{surname}</span>
					<span className="author-card-bio-info-year">{year}</span>
				</div>
				<img className="author-card-bio-img" src={imagePath} alt="portrait" />
			</div>
		</Link >
	)
}

export default AuthorCardBio
