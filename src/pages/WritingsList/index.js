import React, { Fragment } from 'react'

import { useStore } from 'context/Store'
import Heading from 'components/atoms/Title'
import WritingCard from 'pages/WritingsList/WritingCard'

const WritingsList = () => {
	const { writings, getAuthorById } = useStore()

	const renderWritingCards = () => {
		return writings.map((writing) => {
			const { id, authorId } = writing
			const author = getAuthorById(authorId)

			return (
				author && (
					<WritingCard
						key={id}
						writing={writing}
						author={author}
						link={true}
					/>
				)
			)
		})
	}

	return (
		<Fragment>
			<Heading title="ნაწარმოებები" />
			<div className="grid gap-8 xs:px-3 sm:grid-auto-fit-xl">
				{renderWritingCards()}
			</div>
		</Fragment>
	)
}

export default WritingsList
