import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
	
		{props.movies.map(movie => {	
			return (			
				<div key={movie.imdbID} className='image-container d-flex justify-content-start m-2'>
				<img  src={movie.Poster} alt='movie'></img>
				<div
					onClick={() => props.handleFavouritesClick(movie)}
					className='overlay align-items-center justify-content-center'
				>
					<FavouriteComponent />
				</div>
				</div>
			)
		}
	)}
				
			
		</>
	);
};

export default MovieList;