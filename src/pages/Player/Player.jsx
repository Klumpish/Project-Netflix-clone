import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from './../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// api call
	const [apiData, setApiData] = useState({
		name: '',
		key: '',
		published_at: '',
		typeof: '',
	});

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDQyZWYwOTRmNDY3MDc3NTJkZGZmZDAyMWI1YTcwNiIsIm5iZiI6MTc0MjA0MjUyNC40MzUwMDAyLCJzdWIiOiI2N2Q1NzU5YzU3NzY2NWFjZTVmMTY4MjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wwpQwJxx_zO6dQ-t-QVN7ULwzblW1wBD6gqZN5iNAJk',
		},
	};

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
			options
		)
			.then((res) => res.json())
			.then((res) => setApiData(res.results[0]))

			.catch((err) => console.error(err));
	}, []);
	// api call

	return (
		<div className="player">
			<img
				src={back_arrow_icon}
				alt=""
				onClick={() => {
					// sends us back
					navigate('/');
				}}
			/>
			<iframe
				width="90%"
				height="90%"
				src={`https://www.youtube.com/embed/${apiData.key}`}
				title="trailer"
				frameBorder="0"
				allowFullScreen></iframe>
			<div className="player-info">
				<p>{apiData.published_at.slice(0, 10)}</p>
				<p>{apiData.name}</p>
				<p>{apiData.type}</p>
			</div>
		</div>
	);
};

export default Player;
