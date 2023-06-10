import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useStore } from 'context/Store'

const periods = ['ძველი', 'ახალი', 'უახლესი']

const WritingCard = ({ writingId }) => {
    const { writings, authors } = useStore()

    const [writing, setWriting] = useState()
    const [author, setAuthor] = useState()

    const renderDescrition = () => {
        const { id, name, surname, image } = author

        return (
            <div key={id} className="WritingCard-Author">
                <img className="WritingCard-AuthorImage" src={image} alt={`${name} ${surname}`} />
                <span className="WritingCard-AuthorName">{name} {surname}</span>
            </div>
        )
    }

    useEffect(() => {
        const getWriting = () => {
            const writing = writings.find((writing) => writing.id === writingId)
            setWriting(writing)
        }

        const getAuthor = () => {
            const author = authors.find((author) => author.id === writing?.authorId)
            setAuthor(author)
        }

        getWriting()
        getAuthor()
    }, [writingId, writings, authors, writing])

    if (!writing || !author) return null

    const { id, name, year, period, genre } = writing

    return (
        <Link key={id} className="WritingCard" to={`/writing/${id}`}>
            <span className="WritingCard-Name">{name.toUpperCase()}</span>
            {renderDescrition()}
            <span className="WritingCard-Year">{year}</span>
            <div className='WritingCard-Pills'>
                <span className="WritingCard-Period">{periods[period]}</span>
                <span className="WritingCard-Genre">{genre}</span>
            </div>
        </Link>
    )
}

export default WritingCard
