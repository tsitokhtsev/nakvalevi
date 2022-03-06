import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { withData } from './hoc/withData';

const Search = ({ authors, writings }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState('');

	const renderResults = () => {
		return writings
			.filter((writing) => {
				return writing.name.includes(input) || writing.author.includes(input);
			})
			.map((writing) => {
				const { name, author } = writing;

				return (
					<Link
						key={name}
						className="search-result"
						to={`/${author}/${name}`}
						onClick={() => setIsOpen(false)}
					>
						{name} - {author}
					</Link>
				);

			});
	};

	return (
		<React.Fragment>
			<img
				className="Search-Button"
				src="/images/search.svg"
				alt="Search"
				onClick={() => setIsOpen(!isOpen)}
			/>
			<div
				className={classNames(
					"Search",
					{ "Search_isOpen": isOpen }
				)}
			>
				<input
					className="SearchBar-Input"
					type="text"
					placeholder="ნაწარმოების ძიება..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				{input && (
					<ul>
						{renderResults()}
					</ul>
				)}
			</div>
		</React.Fragment>
	);
};

export default withData(Search);
