import React from 'react'

import { useStore } from 'context/Store'
import Heading from 'components/Heading'
import AuthorCard from 'components/timeline/AuthorCard'

const periods = ['ძველი', 'ახალი', 'უახლესი']

const Timeline = () => {
  const { authors } = useStore()

  const renderAuthorCards = (authors) => {
    return authors.map((author) => {
      return <AuthorCard key={author.id} authorId={author.id} />
    })
  }

  const renderPeriods = () => {
    return periods.map((period, periodId) => {
      const authorsByPeriod = authors.filter((author) => author.period === periodId)

      return (
        <div key={periodId} className="Period">
          <h2 className="Period-Title">{period}</h2>
          {renderAuthorCards(authorsByPeriod)}
        </div>
      )
    })
  }

  return (
    <div className="Timeline">
      <Heading title="ქრონოლოგია" />
      {/* image="images/timeline.svg" */}
      <div className="Timeline-Periods">{renderPeriods()}</div>
    </div>
  )
}

export default Timeline
