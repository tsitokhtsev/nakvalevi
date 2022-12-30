import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { useStore } from 'context/Store'

const AuthorCard = ({ authorId }) => {
  const { authors, writings } = useStore()

  const [author, setAuthor] = useState()

  const getAuthor = useCallback(() => {
    const author = authors.find((author) => author.id === authorId)
    setAuthor(author)
  }, [authorId, authors])

  const renderWritings = useCallback(() => {
    console.log(writings)
    return writings
      .filter((writing) => writing.authorId === authorId)
      .map((writing) => (
        <Link key={writing.name} to={`/${author.image}/${writing.name}`} className="AuthorCard-Writing">
          <span>{writing.name}</span>
          <span>{writing.year}</span>
        </Link>
      ))
  }, [authorId, author, writings])

  useEffect(() => {
    getAuthor()
  }, [getAuthor])

  if (!author) return null

  const { name, surname, year, image } = author

  return (
    <div className="AuthorCard">
      <hr />
      <Link to={`/${name}`}>
        <div className="AuthorCard-Author">
          <div className="AuthorCard-AuthorInfo">
            <span className="AuthorCard-AuthorName">{name.toUpperCase()}</span>
            <span className="AuthorCard-AuthorSurname">{surname.toUpperCase()}</span>
            <span className="AuthorCard-AuthorYear">{year}</span>
          </div>
          <img
            className="AuthorCard-AuthorPortrait"
            src={image}
            alt={`პორტრეტი - ${name} ${surname}`}
          />
        </div>
      </Link>
      <hr />
      <div className="AuthorCard-Writings">{renderWritings()}</div>
    </div>
  )
}

export default AuthorCard
