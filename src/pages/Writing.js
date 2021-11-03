import React from 'react'
import { connect } from 'react-redux'
import { fetchAuthor, fetchWriting } from '../actions'

class Writing extends React.Component {
	componentDidMount() {
		const authorId = this.props.location.state.authorId
		const writingId = this.props.location.state.writingId
		this.props.fetchAuthor(authorId)
		this.props.fetchWriting(authorId, writingId)
	}

	render() {
		if (!this.props.author || !this.props.writing) {
			return <div>Loading...</div>
		} else {
			const {
				writing: { name }
			} = this.props

			return (
				<div>{name}</div>
			)
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return { 
		author: state.authors[ownProps.location.state.authorId],
		writing: state.writings[ownProps.location.state.writingId] 
	}
}

export default connect(
	mapStateToProps,
	{ fetchAuthor, fetchWriting }
)(Writing)