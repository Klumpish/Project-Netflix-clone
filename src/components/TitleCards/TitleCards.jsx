import React, { useEffect, useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';

const TitleCards = ({ title, category }) => {
	// enables scrolling in the to the left if we use our scroll on the moive cards
	const cardsRef = useRef();
	const handleWheel = (e) => {
		e.preventDefault();
		cardsRef.current.scrollLeft += e.deltaY;
	};

	useEffect(() => {
		cardsRef.current.addEventListener('wheel', handleWheel);
	}, []);

	return (
		<div className="title-cards">
			<h2>{title ? title : 'Popular on Netflix'}</h2>
			<div
				className="card-list"
				ref={cardsRef}>
				{cards_data.map((card, index) => (
					<div
						className="card"
						key={index}>
						<img
							src={card.image}
							alt={'Image of movie ' + card.name}
						/>
						<p>{card.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TitleCards;
