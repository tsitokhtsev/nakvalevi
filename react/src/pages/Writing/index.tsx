import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import WritingCard from 'components/molecules/WritingCard'
import WritingEssay from 'components/molecules/WritingEssay'
import { useStore } from 'context/Store'
import { WritingWithEssays } from 'types'

type WritingParams = {
	writingId: string
}

const Writing = () => {
	const { getWritingById } = useStore()

	const { writingId } = useParams() as WritingParams

	const [writing, setWriting] = useState<WritingWithEssays | null>(null)

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

	const renderEssays = () => {
		return writing.essays.map((essay) => {
			const { id } = essay

			return <WritingEssay key={id} essay={essay} />
		})
	}

	return (
		<div className="flex flex-col gap-8">
			<WritingCard writing={writing} expanded={true} />
			{renderEssays()}
		</div>
	)
}

export default Writing
