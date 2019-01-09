import React from 'react';
import MovieItem from './MovieItem.jsx'

const MovieCard = (props) =>{
	return (
		<div className = "ui card" style={{width: "100%"}}>
            <div className="content">
                {props.children}
                <div className="ui positive button ui right floated button ">Watched</div>
            </div>
		</div>
	);
};


export default MovieCard;