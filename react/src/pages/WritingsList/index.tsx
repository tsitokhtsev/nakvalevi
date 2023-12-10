import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import Heading from 'components/atoms/Heading'
import WritingCard from 'components/molecules/WritingCard'
import { useStore } from 'context/Store'

const WritingsList = () => {
	const { writings } = useStore()

	const renderWritingCards = () => {
		return writings.map((writing) => {
			const { id } = writing

			return (
				<Link key={id} to={`/writing/${id}`}>
					<WritingCard writing={writing} />
				</Link>
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
