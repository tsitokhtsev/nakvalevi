import React from 'react'

const Title = ({ title, subtitle, image }) => {
    return (
        <div className="Title-Wrapper">
            <div className="Title-Main">
                <h1 className="Title">{ title.toUpperCase() }</h1>
                { subtitle && <span className="Title-Subtitle">{ subtitle }</span> }
            </div>
            { image && <img className="Title-Image" src={ image } alt={ image } /> }
        </div>
    )
}

export default Title
