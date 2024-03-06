import React from 'react';

const HtmlLives = ({ displayedLives }) => {
	const hearts = Array.from({ length: displayedLives }, (index) => (
		<span key={index}>🔥</span>
	));

	return (
		<div className="d-flex justify-content-between text-danger fs-4 fw-bold bangers-text">
			<p>Lives:</p>
			<p className="text-end">{hearts}</p>
		</div>

	);
};

export default HtmlLives;