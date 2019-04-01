import React from 'react';
import { Link } from 'react-router-dom';

const Library = ({ artists }) => {
	return (
		<div className="library">
			<h1>Artists</h1>
			<div className="artist-list">
				{artists.map((artist, index) => (
					<div key={index} className="artist">
						<Link to={`/artist/${artist.slug}`}>
							<img
								className="artist-image h-full rounded-full"
								src={artist.image}
								alt={artist.name}
							/>
							<p className="text-center">{artist.name}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Library;
