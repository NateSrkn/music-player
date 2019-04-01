import React, { Component, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import artistsData from '../data/artists';
import Library from '../components/Library';
import Artist from '../components/Artist';
import Playbar from '../components/Playbar';

class MusicPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: artistsData,
			artist: undefined,
			artistPlaying: undefined,
			currentSong: undefined,
			duration: 0,
			currentTime: 0,
			isPlaying: false
		};
		this.audioElement = document.createElement('audio');
		this.audioElement.src = undefined;
	}

	componentDidMount() {
		this.eventListeners = {
			timeupdate: e => {
				this.setState({ currentTime: this.audioElement.currentTime });
			},
			durationchange: e => {
				this.setState({ duration: this.audioElement.duration });
			}
		};
		this.audioElement.addEventListener(
			'timeupdate',
			this.eventListeners.timeupdate
		);
		this.audioElement.addEventListener(
			'durationchange',
			this.eventListeners.durationchange
		);
	}

	selectArtist(newState) {
		this.setState({
			artist: newState
		});
	}

	play() {
		this.audioElement.play();
		this.setState({ isPlaying: true });
	}

	pause() {
		this.audioElement.pause();
		this.setState({ isPlaying: false });
	}

	setSong(song) {
		this.audioElement.src = song.audioSrc;
		this.setState({ currentSong: song });
	}

	handleSongClick(song) {
		const isSameSong = this.state.currentSong === song;
		if (this.state.isPlaying && isSameSong) {
			this.pause();
		} else {
			if (!isSameSong) {
				this.setSong(song);
			}
			this.play();
		}
	}

	// handleNextClick() {
	// 	const newIndex = Math.min(
	// 		this.state.album.songs.length - 1,
	// 		currentIndex + 1
	// 	);
	// 	const newSong = this.state.album.songs[newIndex];
	// 	this.setSong(newSong);
	// 	this.play(newSong);
	// }

	handlePrevClick() {
		const currentIndex = this.state.album.songs.findIndex(
			song => this.state.currentSong === song
		);
		const newIndex = Math.max(0, currentIndex - 1);
		const newSong = this.state.album.songs[newIndex];
		this.setSong(newSong);
		this.play(newSong);
	}

	handleTimeChange(e) {
		const newTime = this.audioElement.duration * e.target.value;
		this.audioElement.currentTime = newTime;
		this.setState({
			currentTime: this.formatTime(newTime)
		});
	}

	handleVolumeChange(e) {
		const newVolume = e.target.value;
		this.audioElement.volume = newVolume;
		this.setState({ volume: newVolume });
	}

	formatTime(time) {
		return time
			? `${Math.floor(time / 60)}:${Number((time % 60) / 100)
					.toFixed(2)
					.substr(2, 3)}`
			: '-:--';
	}

	render() {
		return (
			<div>
				<div className="container mx-auto">
					<Route
						exact
						path="/"
						render={props => (
							<Library {...props} artists={this.state.artists} />
						)}
					/>

					<Route
						path="/artist/:slug"
						render={props => (
							<Artist
								{...props}
								props={this.props}
								selectArtist={e => this.selectArtist(e)}
								formatTime={e => this.formatTime(e)}
								artist={this.state.artist}
								handleSongClick={e => this.handleSongClick(e)}
							/>
						)}
					/>
				</div>
				{console.log(this.state.artist)}
				<Playbar
					isPlaying={this.state.isPlaying}
					currentSong={this.state.currentSong}
					currentTime={this.state.currentTime}
					duration={this.state.duration}
					formatTime={e => this.formatTime(e)}
					handleTimeChange={e => this.handleTimeChange(e)}
					handleSongClick={() => this.handleSongClick(this.state.currentSong)}
					handleNextClick={() => this.handleNextClick()}
					handleVolumeChange={e => this.handleVolumeChange(e)}
				/>
			</div>
		);
	}
}
export default MusicPlayer;
