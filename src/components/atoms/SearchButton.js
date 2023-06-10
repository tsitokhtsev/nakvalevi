import React from 'react';

const SearchButton = () => {
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
	);
};

export default SearchButton;
