import React from 'react';
import { Link } from 'react-router-dom';

const WritingInfo = ({ authorName, year, genre }) => {
	return (
		<div className="writing-info">
			<p className="writing-info-block">
				<span className="writing-info-block-title">ავტორი:</span>
				<span className="writing-info-block-content"><Link to={authorName}>{authorName}</Link></span>
			</p>
			<p className="writing-info-block">
				<span className="writing-info-block-title">წელი:</span>
				<span className="writing-info-block-content">{year}</span>
			</p>
			<p className="writing-info-block">
				<span className="writing-info-block-title">ჟანრი:</span>
				<span className="writing-info-block-content">{genre}</span>
			</p>
		</div>
	);
};

export default WritingInfo;
