import React, { useEffect, useState } from 'react'

import Heading from 'components/atoms/Heading'
import Year from 'components/atoms/Year'
import WritingPills from 'components/molecules/WritingPills'
import { useStore } from 'context/Store'
import { AuthorType, WritingType } from 'types'

interface WritingCardProps {
	writing: WritingType
	expanded?: boolean
}

const WritingCard: React.FC<WritingCardProps> = ({
	writing,
	expanded = false
}) => {
	const { getAuthorById, getAuthorImageUrl } = useStore()

	const [author, setAuthor] = useState<AuthorType | null>(null)

	const renderAuthor = () => {
		if (!author) {
			return null
		}

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

	useEffect(() => {
		const fetchAuthor = async () => {
			const author = await getAuthorById(writing.authorId)
			setAuthor(author)
		}

		fetchAuthor()
	}, [getAuthorById, writing])

	const { name, year, period, genres } = writing

	return (
		<div
			className={`flex h-full flex-col justify-between gap-8 rounded-3xl border border-solid border-border bg-background p-8 ${
				expanded && 'md:flex-row md:items-end'
			}`}
		>
			<Heading text={name} size={expanded ? 1 : 3} />
			<div
				className={`flex flex-col gap-4 ${
					expanded && 'md:shrink-0 md:items-end'
				}`}
			>
				<Year year={year} />
				{renderAuthor()}
				<WritingPills period={period} genreIds={genres} />
			</div>
		</div>
	)
}

export default WritingCard
