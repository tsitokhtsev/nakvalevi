import React from 'react'
import { connect } from 'react-redux'
import { fetchAuthors } from '../actions'
import Heading from '../components/Heading'
import Period from '../components/timeline/Period'

class Timeline extends React.Component {
	componentDidMount() {
		this.props.fetchAuthors()
	}

	filterAuthors(period) {
		return this.props.authors.filter(author => author.period === period)
	}

	render() {
		return (
			<div className="timeline section">
				<Heading
					heading="თაიმლაინი"
					image="images/timeline.svg"
				/>

				<Period
					name="old"
					authors={this.filterAuthors("old")}
				/>

				<Period
					name="new"
					authors={this.filterAuthors("new")}
				/>

				<Period
					name="newest"
					authors={this.filterAuthors("newest")}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { authors: Object.values(state.authors) }
}

export default connect(
	mapStateToProps,
	{ fetchAuthors }
)(Timeline)