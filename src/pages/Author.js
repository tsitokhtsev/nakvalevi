import React from 'react'
import { connect } from 'react-redux'
import { fetchAuthor } from '../actions'
import AuthorWritings from '../components/author/AuthorWritings'
import Heading from '../components/Heading'

import '../style/author.scss'

class Author extends React.Component {
	componentDidMount() {
		this.props.fetchAuthor(this.props.location.state.id)
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

const mapStateToProps = (state, ownProps) => {
	return { author: state.authors[ownProps.location.state.id] }
}

export default connect(
	mapStateToProps,
	{ fetchAuthor }
)(Author)