import React from 'react'
import { connect } from 'react-redux'
import { fetchAuthor, fetchWriting } from '../actions'
import Heading from '../components/Heading'
import WritingInfo from '../components/writing/WritingInfo'
import WritingCard from '../components/writing/WritingCard'

import '../style/writing.scss'

class Writing extends React.Component {
	componentDidMount() {
		const authorName = this.props.match.params.authorName
		const authorSurname = this.props.match.params.authorSurname
		const writingName = this.props.match.params.writingName.split('-').join(' ')
		this.props.fetchAuthor(authorName, authorSurname)
		this.props.fetchWriting(authorName, authorSurname, writingName)
	}

	render() {
		if (!this.props.author || !this.props.writing) {
			return <div>Loading...</div>
		} else {
			const {
				author,
				writing: { name, year, genre, essay, characters, dictionary }
			} = this.props

			const renderedAnalysis = essay.map((paragraph, index) => {
				return <p key={index}>{paragraph}</p>
			})

			return (
				<div className="writing section">
					<Heading text={name} />

					<WritingInfo
						author={author}
						year={year}
						genre={genre}
					/>

					{
						essay !== "" &&
						<WritingCard
							ref={this.charactersCard}
							title="ანალიზი"
							content={renderedAnalysis}
						/>
					}

					{
						characters !== "" &&
						<WritingCard
							ref={this.analysisCard}
							title="პერსონაჟები"
							content={""}
						/>
					}

					{
						characters !== "" &&
						<WritingCard
							ref={this.dictionaryCard}
							title="ლექსიკონი"
							content={""}
						/>
					}
				</div>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		author: state.authors.currentAuthor,
		writing: state.writings.currentWriting
	}
}

export default connect(
	mapStateToProps,
	{ fetchAuthor, fetchWriting }
)(Writing)
