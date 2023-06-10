import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const withData = (Component) => {
	const Wrapper = (props) => {
		const [authors, setAuthors] = useState(null);
		const [writings, setWritings] = useState(null);

		useEffect(() => {
			const fetchData = async () => {
				const authors = await axios.get('/authors.json');
				const writings = await axios.get('/writings.json');

				setAuthors(authors.data);
				setWritings(writings.data);
			};

			fetchData();
		}, []);

		return authors && writings && (
			<Component {...props} authors={authors} writings={writings} />
		);
	};

	return Wrapper;
};
