import React from 'react';

const MovieItem = (props) => {
    // console.log(props.movie);
    return (
        <div>
            <li>{props.movie}</li>
        </div>
    )
}

export default MovieItem;