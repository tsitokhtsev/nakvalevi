import React from 'react'

import { useStore } from 'context/Store'
import Heading from 'components/Title'
import WritingCard from 'pages/WritingsList/WritingCard'

const WritingsList = () => {
    const { writings } = useStore()

    const renderWritingCards = () => {
        return writings.map((writing) => <WritingCard key={writing.id} writingId={writing.id} />)
    }

    return (
        <div className="WritingsList">
            <Heading title="ნაწარმოებები" />
            <div className="WritingsList-Wrapper">
                {renderWritingCards()}
            </div>
        </div>
    )
}

export default WritingsList
