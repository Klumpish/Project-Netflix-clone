import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

// easier to update the Nav items
const navItems = [
	'Home',
	'TV shows',
	'Movies',
	'New & popular',
	'My List',
	'Browse by languages',
];

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-left">
				<img
					src={logo}
					alt="Netflix Logo"
				/>
				<ul>
					{/* spread out our nav items */}
					{navItems.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
			<div className="navbar-right">
				<img
					src={search_icon}
					alt="search icon"
					className="icons"
				/>
				<p>Children</p>
				<img
					src={bell_icon}
					alt=""
					className="icons"
				/>
				<div className="navbar-profile">
					<img
						src={profile_img}
						alt="Profile image"
						className="profile"
					/>
					<img
						src={caret_icon}
						alt=""
						className=""
					/>
					<div className="dropdown">
						<p>Sign Out of Netflix</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
