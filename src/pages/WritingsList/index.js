import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { useStore } from 'context/Store'
import Heading from 'components/atoms/Heading'
import WritingCard from 'components/molecules/WritingCard'

const WritingsList = () => {
	const { writings, getAuthorById } = useStore()

	const renderWritingCards = () => {
		return writings.map((writing) => {
			const { id, authorId } = writing
			const author = getAuthorById(authorId)

			return (
				author && (
					<Link key={id} to={`/writing/${id}`}>
						<WritingCard writing={writing} author={author} />
					</Link>
				)
			)
		})
	}

	return (
		<Fragment>
			<Heading text="ნაწარმოებები" />
			<div className="grid gap-8 xs:px-3 sm:grid-auto-fit-xl">
				{renderWritingCards()}
			</div>
		</Fragment>
	)
}

export default WritingsList
