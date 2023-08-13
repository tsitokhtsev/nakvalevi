import React from 'react'

import { useStore } from 'context/Store'
import Pill from 'components/atoms/Pill'

const periods = ['ძველი', 'ახალი', 'უახლესი']

const WritingPills = ({ period, genres, classes }) => {
	const { getGenresByIds } = useStore()

	const renderGenres = () => {
		return getGenresByIds(genres).map((genre) => {
			const { id, name } = genre

			return <Pill key={id} text={name} type={'genre'} />
		})
	}

	return (
		<div className={`flex flex-wrap gap-2 ${classes}`}>
			<Pill text={periods[period]} type={'period'} />
			{renderGenres()}
		</div>
	)
}

export default WritingPills
