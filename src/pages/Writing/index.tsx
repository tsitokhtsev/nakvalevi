import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import WritingCard from 'components/molecules/WritingCard'
import { useStore } from 'context/Store'
import { WritingType } from 'types'

type WritingParams = {
	writingId: string
}

const Writing = () => {
	const { getWritingById } = useStore()

	const { writingId } = useParams() as WritingParams

	const [writing, setWriting] = useState<WritingType | null>(null)

	useEffect(() => {
		const fetchWriting = async () => {
			const writing = await getWritingById(parseInt(writingId))
			setWriting(writing)
		}

		fetchWriting()
	}, [getWritingById, writingId])

	if (!writing) {
		return null
	}

	return (
		<div>
			<WritingCard writing={writing} expanded={true} />
		</div>
	)
}

export default Writing
