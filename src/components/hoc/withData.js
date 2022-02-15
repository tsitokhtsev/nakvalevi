import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const withData = (Component) => {
	const Wrapper = (props) => {
		const [data, setData] = useState(null);

		useEffect(() => {
			const fetchData = async () => {
				const { data: { authors } } = await axios.get('/data.json');
				setData(authors);
			};

			fetchData();
		}, []);

		return data && <Component {...props} authors={data} />;
	};

	return Wrapper;
};
