import React from 'react';
//import MovieCard from './MovieCard.jsx'

class MovieItem extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            
        }
    }

    addMovieToWatchList = () => {
        event.preventDefault();
        this.props.addToWatchList(event.target.id);
    }

    addMovieToWatchedList = () => {
        event.preventDefault();
        this.props.addToWatchedList(event.target.id);
    }

    render(){
        return (
            <div>
                <div className = "ui card" style={{width: "100%"}}>
                    <div id={this.props.id} className="header">
                    <h2>{this.props.movie}</h2>
                    </div>
                    <div className="content" style={{display:"inlineBlock"}}>
                        <img style={{size: '10px', float:"left", marginRight: "10px"}} src={this.props.image}></img>
                        <p style={{display:"inlineBlock", marginRight: "10px"}}>{this.props.overview}</p>
                    </div>
                    <div className="extra content">
                        <div className="ui buttons right floated">
                            <button className="ui button" id={this.props.id} onClick={this.addMovieToWatchedList}>Watched</button>
                            <div className="or"></div>
                            <button className="ui positive button" id={this.props.id} onClick={this.addMovieToWatchList}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default MovieItem;