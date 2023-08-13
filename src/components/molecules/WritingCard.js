import React from 'react'

import { useStore } from 'context/Store'
import Heading from 'components/atoms/Heading'
import Year from 'components/atoms/Year'
import WritingPills from 'components/molecules/WritingPills'

const WritingCard = ({ writing, author, expanded = false }) => {
	const { getAuthorImageUrl } = useStore()

	const renderAuthor = () => {
		const { name, surname, image } = author
		const imageUrl = getAuthorImageUrl(image)

		return (
			<div className="flex items-center gap-2">
				<img
					className="w-6 rounded-full"
					src={imageUrl}
					alt={`${name} ${surname}`}
				/>
				<span>
					{name} {surname}
				</span>
			</div>
		)
	}

	const { name, year, period, genres } = writing

	return (
		<div
			className={`flex h-full flex-col justify-between gap-8 rounded-3xl border border-solid border-border bg-background p-8 ${
				expanded && 'md:flex-row md:items-end'
			}`}
		>
			<Heading text={name} size={expanded ? 1 : 3} classes="flex-1" />
			<div
				className={`flex flex-col gap-4 ${
					expanded && 'md:shrink-0 md:items-end'
				}`}
			>
				<Year year={year} />
				{renderAuthor()}
				<WritingPills period={period} genres={genres} />
			</div>
		</div>
	)
}

export default WritingCard
