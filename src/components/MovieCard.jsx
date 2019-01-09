import React from 'react';
import MovieItem from './MovieItem.jsx'

const MovieCard = (props) =>{
	return (
		<div className = "ui card" style={{width: "100%"}}>
            <div className="content">
                {props.children}
                <div className="ui buttons ui right floated button">
                    <button className="ui button">To Watch</button>
                    <div className="or"></div>
                    <button className="ui positive button">Watched</button>
                    </div>
            </div>
		</div>
	);
};


export default MovieCard;

