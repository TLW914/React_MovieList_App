import React from 'react';

const MovieItem = (props) => {
    // console.log(props.movie);
    return (
        <div>
            <ul>{props.movie}</ul>
        </div>
    )
}

export default MovieItem;