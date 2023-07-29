import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { useStore } from 'context/Store'

const periods = ['ძველი', 'ახალი', 'უახლესი']

const WritingCard = ({ writing, author, link = false }) => {
	const { getAuthorImageUrl, getGenresByIds } = useStore()

	const getFormattedYear = () => {
		const { year } = writing

		if (year.includes('-')) {
			return year + ' წლები'
		}

		if (year.match(/[A-Z]/)) {
			return year
		}

		return year + ' წელი'
	}

	const renderAuthor = () => {
		const { name, surname, image } = author
		const imageUrl = getAuthorImageUrl(image)

		return (
			<div className="flex items-center gap-2">
				<img
					className="w-8 rounded-full"
					src={imageUrl}
					alt={`${name} ${surname}`}
				/>
				<span>
					{name} {surname}
				</span>
			</div>
		)
	}

	const renderGenres = () => {
		const { genres } = writing

		return getGenresByIds(genres).map((genre) => {
			const { id, name } = genre

			return (
				<span
					key={id}
					className="rounded-full border border-solid border-green bg-green bg-opacity-50 px-2 py-1 text-xs"
				>
					{name}
				</span>
			)
		})
	}

	const renderContent = () => {
		const { name, period } = writing

		return (
			<Fragment>
				<span className="text-3xl font-bold text-green-dark">
					{name.toUpperCase()}
				</span>
				<div className="flex flex-col gap-4">
					<span className="">{getFormattedYear()}</span>
					{renderAuthor()}
					<div className="flex gap-2 flex-wrap">
						<span className="rounded-full border border-solid border-yellow bg-yellow bg-opacity-50 px-2 py-1 text-xs">
							{periods[period]}
						</span>
						{renderGenres()}
					</div>
				</div>
			</Fragment>
		)
	}

	return link ? (
		<Link
			className="flex flex-col justify-between gap-4 rounded-3xl border border-solid border-border bg-background p-8"
			to={`/writing/${writing.id}`}
		>
			{renderContent()}
		</Link>
	) : (
		<div className="flex items-end justify-between gap-8">
			{renderContent()}
		</div>
	)
}

export default WritingCard
