import React from 'react';

const Playbar = props => (
	<div className="playbar">
		<div className="controls">
			<button id="prev-track" className="button prev-track" />
			<button
				id="play-pause"
				className={!props.isPlaying ? 'button play' : 'button pause'}
				onClick={props.handleSongClick}
			/>

			<button
				id="next-track"
				className="button next-track"
				onClick={props.handleNextClick}
			/>
		</div>
		<div className="track-control">
			<div className="current-time">{props.formatTime(props.currentTime)}</div>
			<input
				type="range"
				className="seeker"
				value={props.currentTime / props.duration || 0}
				max="1"
				min="0"
				step="0.01"
				onChange={props.handleTimeChange}
			/>
			<div className="duration">{props.formatTime(props.duration)}</div>
		</div>
		<div className="volume-control">
			<input
				type="range"
				className="seeker sm:hidden"
				value={props.volume}
				max="1"
				min="0"
				step="0.01"
				onChange={props.handleVolumeChange}
			/>
		</div>
	</div>
);

export default Playbar;
