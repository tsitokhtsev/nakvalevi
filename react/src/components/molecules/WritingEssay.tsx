import React from 'react'
import Heading from 'components/atoms/Heading'
import { EssayType } from 'types'

interface WritingEssayProps {
	essay: EssayType
}

const WritingEssay: React.FC<WritingEssayProps> = ({ essay }) => {
	const { quote, points, text } = essay

	const renderParagraphs = (text: string) => {
		const paragraphs = text
			.split('\n')
			.filter((paragraph) => paragraph !== '')

		return (
			<div className="flex flex-col gap-4">
				{paragraphs.map((paragraph, index) => {
					return (
						<p key={index} className="text-black">
							{paragraph}
						</p>
					)
				})}
			</div>
		)
	}

	const renderQuote = () => {
		if (!quote) {
			return null
		}

		return (
			<blockquote className="border-solid border-l-2 border-green-dark pl-4">
				{renderParagraphs(quote)}
			</blockquote>
		)
	}

	const renderPoints = () => {
		if (!points) {
			return null
		}

		return (
			<ul className="flex flex-col gap-2">
				{points.map((point, index) => {
					return (
						<li key={index}>
							<span className="mr-4 text-green-dark">&bull;</span>
							<span>{point}</span>
						</li>
					)
				})}
			</ul>
		)
	}

	return (
		<div className="flex flex-col gap-8">
			<Heading size={2} text="ესე" />
			{renderQuote()}
			{renderPoints()}
			{renderParagraphs(text)}
		</div>
	)
}

export default WritingEssay
