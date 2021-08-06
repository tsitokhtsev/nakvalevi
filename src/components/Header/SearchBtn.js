import React from 'react'
import './btn.scss'
import searchImg from './search.svg'

const SearchBtn = () => {
	return (
		<div
			className="search-btn"
			style={{
				background: `url(${searchImg}) no-repeat`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
			alt="search"
		/>
	)
}

export default SearchBtn