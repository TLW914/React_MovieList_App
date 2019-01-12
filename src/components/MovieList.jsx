

import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = (props) => {
    console.log("movielist",props);

    const movieTitle = props.movies.map((movie) => {
        movie.image = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
        return <MovieItem movie={movie.title} key={movie.id} id={movie.id} image={movie.image} overview={movie.overview} addMovieFromMovieList={props.addMovieToList}/>
    })

    return (
        <div>
            {movieTitle}
        </div>
    );
}

export default MovieList;


