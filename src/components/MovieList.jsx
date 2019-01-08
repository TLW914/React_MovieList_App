import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = (props) => {
    // console.log(props);

    const movieTitle = props.movies.map((movie) => {
        return <MovieItem movie={movie.title} key={movie.title}/>
    })

    return (
        <div>
            {movieTitle}
        </div>
    );
}

export default MovieList;