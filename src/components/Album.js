import React from 'react';
import SongList from './SongList';

const Album = ({ album, name, formatTime, handleSongClick }) => {
	return (
		<div className="album h-full">
			<div className="album-info flex flex-col md:flex-row pb-6 pl-5">
				<img
					className="h-48 w-48 md:w-auto lg:h-64"
					src={album.cover}
					alt={album.title}
				/>
				<div className="album-text text-left my-3 md:my-10 md:pl-5">
					<h2 className="text-4xl md:text-left">{album.title}</h2>
					<small className="md:hidden text-grey">{name}</small>
					<br />
					<small className="text-grey pt-2 md:pt-0">{album.released}</small>
				</div>
			</div>
			<SongList
				album={album}
				formatTime={e => formatTime(e)}
				handleSongClick={e => handleSongClick(e)}
			/>
		</div>
	);
};

export default Album;
