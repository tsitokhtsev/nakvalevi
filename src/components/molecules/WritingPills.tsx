import React, { useEffect, useState } from 'react'

import Pill from 'components/atoms/Pill'
import { useStore } from 'context/Store'
import { GenreType } from 'types'

const periods = ['ძველი', 'ახალი', 'უახლესი']

interface WritingPillsProps {
	period: number
	genreIds: number[]
	classes?: string
}

const WritingPills: React.FC<WritingPillsProps> = ({
	period,
	genreIds,
	classes
}) => {
	const { getGenresByIds } = useStore()

	const [genres, setGenres] = useState<GenreType[]>([])

	const renderGenres = () => {
		return genres.map((genre) => {
			const { id, name } = genre

			return <Pill key={id} text={name} type="genre" />
		})
	}

	useEffect(() => {
		const fetchGenres = async () => {
			const genres = await getGenresByIds(genreIds)
			setGenres(genres)
		}

		fetchGenres()
	}, [getGenresByIds, genreIds])

	return (
		<div className={`flex flex-wrap gap-2 ${classes}`}>
			<Pill text={periods[period]} type="period" />
			{renderGenres()}
		</div>
	)
}

export default WritingPills
