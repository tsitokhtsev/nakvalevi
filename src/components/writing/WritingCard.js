import React from 'react';
import classNames from 'classnames';

// import { writingCardContentMap } from './Writing.config';

const WritingCard = ({ title, content, isOpen, setIsOpen }) => {
	const onHeaderClick = () => {
		if (isOpen) {
			setIsOpen(null);
		} else {
			setIsOpen(title);
		}
	};

	const renderEssay = () => {
		return content.map((paragraph, index) => (
			<p key={index}>{paragraph}</p>
		));
	};

	const renderCharacters = () => {
		return content.map((character) => {
			const { name, qualities } = character;

			return (
				<div key={name} className="WritingCard-Character">
					<p>{name}</p>
					<ul>
						{qualities.map((quality) => (
							<li key={quality}>{quality}</li>
						))}
					</ul>
				</div>
			);
		});
	};

	const renderDictionary = () => {
		console.log(content);
	};

	const renderMap = {
		"ანალიზი": renderEssay,
		"პერსონაჟები": renderCharacters,
		"ლექსიკონი": renderDictionary
	};

	// const contentClassName = `WritingCard-${writingCardContentMap[title]}`;

	return (
		<div className="WritingCard">
			<div
				className="WritingCard-Header"
				onClick={() => onHeaderClick()}
			>
				<span className="WritingCard-Title">{title}</span>
				<img
					className={classNames(
						"WritingCard-Arrow",
						{ "WritingCard-Arrow_isOpen": isOpen }
					)}
					src="/images/arrow.svg"
					alt="arrow"
				/>
			</div>
			<div
				className={classNames(
					"WritingCard-Content",
					{ "WritingCard-Content_isOpen": isOpen }
				)}
			>
				{renderMap[title]()}
			</div>
		</div>
	);
};

export default WritingCard;
