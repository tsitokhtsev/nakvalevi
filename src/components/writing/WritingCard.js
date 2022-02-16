import React, { useState } from 'react';
import classNames from 'classnames';

const WritingCard = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="WritingCard">
			<div
				className="WritingCard-Header"
				onClick={setIsOpen(!isOpen)}
			>
				<span className="WritingCard-Title">{title}</span>
				<img
					className={classNames(
						"WritingCard-Arrow",
						{ "WritingCard-Arrow_isOpen": isOpen }
					)}
					src="/images/arrow.svg"
					alt="arrow" />
			</div>
			<div
				className={classNames(
					"WritingCard-Content",
					{ "WritingCard-Content_isOpen": isOpen }
				)}
			>
				{content}
			</div>
		</div>
	);
};

export default WritingCard;
