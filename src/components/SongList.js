import React from 'react';
import Clock from '../Icons/Clock';

const SongList = ({ formatTime, album, handleSongClick }) => {
	return (
		<table id="songs">
			<colgroup>
				<col id="song-number" />
				<col id="song-title" />
				<col id="song-length" />
			</colgroup>
			<tbody>
				<tr>
					<th className="hidden md:block">#</th>
					<th className="song-title-head">Title</th>
					<th className="song-length-head">
						<Clock />
					</th>
				</tr>
				{album.songs.map((song, index) => (
					<tr key={index + 1} onClick={() => handleSongClick(song)}>
						<td className="song-num hidden md:block">{index + 1}</td>
						<td className="song-title">{song.title}</td>
						<td className="song-length">{formatTime(song.duration)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default SongList;
