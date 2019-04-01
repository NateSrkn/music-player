import React from 'react';

const Navbar = () => (
	<div className="nav">
		<button
			className="page-control"
			onClick={() => {
				window.history.back();
			}}>
			<i className="arrow backwards" />
		</button>

		<button
			className="page-control"
			onClick={() => {
				window.history.forward();
			}}>
			<i className="arrow forwards" />
		</button>
	</div>
);
export default Navbar;
