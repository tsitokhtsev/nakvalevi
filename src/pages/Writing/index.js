import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useStore } from 'context/Store'
import WritingCard from 'components/molecules/WritingCard'

const Writing = () => {
	const { getAuthorById, getWritingById } = useStore()

	const { writingId } = useParams()

	const [author, setAuthor] = useState()
	const [writing, setWriting] = useState()

	useEffect(() => {
		const fetchData = async () => {
			const writing = await getWritingById(writingId)
			const author = await getAuthorById(writing.authorId)

			setAuthor(author)
			setWriting(writing)
		}

		fetchData()
	}, [getAuthorById, getWritingById, writingId])

	if (!writing || !author) {
		return null
	}

	return (
		<div>
			<WritingCard writing={writing} author={author} expanded={true} />
			{/* <WritingInfo
				authorName={author}
				year={year}
				genre={genre}
			/>
			{Object.entries(writingCardContentMap).map(([key, value]) => {
				const content = writing[value.toLowerCase()]

				return content && (
					<WritingCard
						key={key}
						title={key}
						content={content}
						isOpen={isOpen === key}
						setIsOpen={setIsOpen}
					/>
				)
			})} */}
		</div>
	)
}

export default Writing
