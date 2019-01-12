import React from 'react';
import MovieList from './MovieList.jsx';
import dataMovies from '../data/data.js';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import searchMovieDB from '../apis/movieDB.js';
import searchMovieDBId from '../apis/movieDBId.js';
import searchMovieDBPopular from '../apis/movieDBPopular';
import _ from 'lodash';


class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            movies: [],
            watchedMovies: [],
            myQueue: []
        };
    }

    componentDidMount() {
        searchMovieDBPopular((data)=>{
            this.setState({
                movies: data
              });
        });
    }

    toggleHidden = () => {
        this.setState({
          isHidden: true
        });
      }

    onTermSubmit = (term) => {
        var query = term;
        console.log(term);
        searchMovieDB(query, (data) => {
            console.log(data)
            this.setState({ 
                movies: data ,
            });
        });
    }

    onAddMovieToWatchList = (id) => {
            dataMovies.toWatch.push(event.target.id)
    }

    onAddMovieToWatchedList = (id) => {
            dataMovies.watched.push(event.target.id)
    }

    onAddNewMovie = (userMovie) => {
        const newMovie = {title: userMovie, key: userMovie, status: "To Watch"};
        userList.push(newMovie)
        dataMovies.push(newMovie)
        this.setState({movies: userList})
    }

    onToggleMovie = () => {
        if(event.target.text === "Search Movies"){
            searchMovieDBPopular((data)=>{
                this.setState({
                    movies: data
                  });
            });
        } else if (event.target.text === "To Watch") {
                console.log(dataMovies.toWatch)
                var moviesToSee = [];
                var movieList = _.uniq(dataMovies.toWatch);
                _.forEach(movieList, ((movieId)=> {
                    searchMovieDBId(movieId, (data) => {
                        moviesToSee.push(data)
                            this.setState({ 
                                movies: moviesToSee ,
                            });
                        });
                        console.log("moviestoSee",moviesToSee)
                    }));
        } else if (event.target.text === "Watched"){
            var seenMovies = [];
            var moviesSeen = _.uniq(dataMovies.watched);
            _.forEach(moviesSeen, ((movieId)=> {
                    searchMovieDBId(movieId, (data) => {
                        seenMovies.push(data)
                             this.setState({ 
                                movies: seenMovies ,
                            });
                        });
                        console.log("movies ive seen",seenMovies)
                    }));
                }
        }

        
    render (){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <div className="ui top attached tabular menu">
                <a className="item active" onClick={this.onToggleMovie}>
                        Search Movies
                    </a>
                    <a className="item" onClick={this.onToggleMovie}>
                        Watched
                    </a>
                    <a className="item"  onClick={this.onToggleMovie}>
                        To Watch
                    </a>
                    <div className="right menu">
                        <div className="item">
                            <SearchBar onFormSubmission={this.onTermSubmit}/>
                        </div>
                    </div>
                    <div className="right menu">
                        <div className="item">
                            <AddMovie onAddMovie={this.onAddNewMovie}/>
                        </div>
                    </div>
                </div>
            <div className="ui bottom attached segment">
                <MovieList movies={this.state.movies} addMovieToWatchList={this.onAddMovieToWatchList} addMovieToWatchedList={this.onAddMovieToWatchedList}/>
            </div>
        </div>
        )
    }
}

export default App;

