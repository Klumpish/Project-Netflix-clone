import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';
// import cards_data from '../../assets/cards/Cards_data';

const TitleCards = ({ title, category }) => {
	const [apiData, setApiData] = useState([]);

	// enables scrolling in the to the left if we use our scroll on the moive cards
	const cardsRef = useRef();

	// api call
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDQyZWYwOTRmNDY3MDc3NTJkZGZmZDAyMWI1YTcwNiIsIm5iZiI6MTc0MjA0MjUyNC40MzUwMDAyLCJzdWIiOiI2N2Q1NzU5YzU3NzY2NWFjZTVmMTY4MjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wwpQwJxx_zO6dQ-t-QVN7ULwzblW1wBD6gqZN5iNAJk',
		},
	};

	// api call

	const handleWheel = (e) => {
		e.preventDefault();
		cardsRef.current.scrollLeft += e.deltaY;
	};

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`,
			options
		)
			.then((res) => res.json())

			.then((res) => setApiData(res.results))
			.catch((err) => console.error(err));

		cardsRef.current.addEventListener('wheel', handleWheel);
	}, []);

	return (
		<div className="title-cards">
			<h2>{title ? title : 'Popular on Netflix'}</h2>
			<div
				className="card-list"
				ref={cardsRef}>
				{apiData.map((card, index) => (
					<Link
						to={`/player/${card.id}`}
						className="card"
						key={index + card.original_title}>
						<img
							src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
							alt={'Image of movie ' + card.original_title}
						/>
						<p>{card.original_title}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default TitleCards;
