import React from 'react';
import MovieCard from './MovieCard.jsx'

const MovieItem = (props) => {
    // console.log(props.movie);
    return (
        <div>
            <MovieCard>{props.movie}</MovieCard>
            
        </div>
    )
}

export default MovieItem;