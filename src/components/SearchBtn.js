import React from 'react'

import '../style/btn.scss'

const SearchBtn = () => {
	return (
		<div
			className="search-btn"
			style={{
				background: 'url(/images/search.svg) no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
			alt="search"
		/>
	)
}

export default SearchBtn