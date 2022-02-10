import React from 'react'
import { connect } from 'react-redux'
import { fetchAuthor } from '../redux/actions'
import Heading from '../components/Heading'
import AuthorWritings from '../components/author/AuthorWritings'

import '../style/author.scss'

class Author extends React.Component {
	componentDidMount() {
		const authorName = this.props.match.params.authorName
		const authorSurname = this.props.match.params.authorSurname
		this.props.fetchAuthor(authorName, authorSurname)
	}

	render() {
		if (!this.props.author) {
			return <div>Loading...</div>
		} else {
			const {
				author: { imagePath, name, surname, writings, year }
			} = this.props

			return (
				<div className="author section">
					<Heading
						text={`${name} ${surname}`}
						subtext={year}
						image={imagePath}
					/>

					<AuthorWritings
						className="author-writings"
						author={this.props.author}
						writings={writings}
					/>
				</div >
			)
		}
	}
}

const mapStateToProps = state => {
	return { author: state.authors.currentAuthor }
}

export default connect(
	mapStateToProps,
	{ fetchAuthor }
)(Author)
