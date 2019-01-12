import React from 'react';
import MovieList from './MovieList.jsx';
import dataMovies from '../data/data.js';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import searchMovieDB from '../apis/movieDB.js';
import searchMovieDBId from '../apis/movieDBId.js';
import searchMovieDBPopular from '../apis/movieDBPopular';

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
              })
        });
    }

    toggleHidden = () => {
        this.setState({
          isHidden: true
        })
      }

    onTermSubmit = (term) => {
        // const matches = dataMovies.filter((movie)=>{
        //     return movie.title === term;
        // }); 
        // if (!matches.length) {
        //     alert('Looks like there\'s no movie by that title on record.\n' +
        //      'Please try another search.')
        // } else{
        //     this.setState({movies: matches})
        // }
        var query = term;
        console.log(term);
        searchMovieDB(query, (data) => {
            console.log(data)
            this.setState({ 
                movies: data ,
            });
        });

    }

    onAddMovieToList = (id) => {
        if(dataMovies.toWatch.length > 0){
            for (var i=0; i<dataMovies.toWatch.length; i++){
                if (dataMovies.toWatch[i] === event.target.id){
                    alert('Movie is already in list');
                } else {
                    dataMovies.toWatch.push(event.target.id)
                }
            }
            console.log('from the movieItem', dataMovies.toWatch)
        } else {
            dataMovies.toWatch.push(event.target.id)
        }
        
        
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
                  })
            });
        } else {
                if (event.target.text === "To Watch") {
                    console.log(dataMovies.toWatch)
                    var moviesToSee = [];
                      dataMovies.toWatch.forEach((movieId)=> {
                        searchMovieDBId(movieId, (data) => {
                             moviesToSee.push(data)
                             this.setState({ 
                                movies: moviesToSee ,
                            })
                        });
                        console.log("moviestoSee",moviesToSee)
                    })
                } 
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
                <MovieList movies={this.state.movies} addMovieToList={this.onAddMovieToList}/>
            </div>
        </div>
        )
    }
}

export default App;

