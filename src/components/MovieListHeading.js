import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col col-sm-4'>
			<h1 className='p-3 m-3'>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;