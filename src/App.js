import React from 'react';

import './styles/main.scss';
import './styles/tailwind.css';
import MusicPlayer from './Pages/MusicPlayer';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<div className="App bg-black h-screen overflow-y-visible overflow-y-scroll text-white antialiased">
			<div className="container mx-auto py-10">
				<Navbar />
			</div>

			<MusicPlayer />
		</div>
	);
};

export default App;
