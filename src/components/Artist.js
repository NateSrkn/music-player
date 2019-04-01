import React, { useEffect } from 'react';

import artistsData from '../data/artists';
import Album from './Album';

const Artist = ({ match, selectArtist, formatTime, handleSongClick }) => {
	const newArtist = artistsData.find(artist => {
		return artist.slug === match.params.slug;
	});

	useEffect(() => {
		selectArtist(newArtist);
	}, [newArtist]);

	return (
		<div className="artist-page">
			<div className="artist-hero pb-10 pl-5">
				<h1>{newArtist.name}</h1>
			</div>
			<div className="albums">
				{newArtist.albums.map((album, index) => (
					<Album
						key={index}
						album={album}
						index={index}
						name={newArtist.name}
						formatTime={e => formatTime(e)}
						handleSongClick={e => handleSongClick(e)}
					/>
				))}
			</div>
		</div>
	);
};

export default Artist;
