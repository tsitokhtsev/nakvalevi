import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useStore } from 'context/Store'

const periods = ['ძველი', 'ახალი', 'უახლესი']

const WritingCard = ({ writingId }) => {
    const { writings, authors, genres } = useStore()

    const [writing, setWriting] = useState()
    const [author, setAuthor] = useState()

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

        return (
            <div className="WritingCard-Author">
                <img className="WritingCard-AuthorImage" src={image} alt={`${name} ${surname}`} />
                <span className="WritingCard-AuthorName">{name} {surname}</span>
            </div>
        )
    }

    const renderGenres = () => {
        const { genres: writingGenres } = writing
        const filteredGenres = genres.filter((genre) => writingGenres.includes(genre.id))

        return filteredGenres.map((genre) => {
            const { id, name } = genre

            return <span key={id} className="WritingCard-Genre">{name}</span>
        })
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

    if (!writing || !author || !genres) return null

    const { id, name, period } = writing

    return (
        <Link key={id} className="WritingCard" to={`/writing/${id}`}>
            <span className="WritingCard-Name">{name.toUpperCase()}</span>
            <div className="WritingCard-Details">
                {renderAuthor()}
                <span className="WritingCard-Year">{getFormattedYear()}</span>
                <div className='WritingCard-Pills'>
                    <span className="WritingCard-Period">{periods[period]}</span>
                    {renderGenres()}
                </div>
            </div>
        </Link>
    )
}

export default WritingCard
