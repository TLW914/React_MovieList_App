import React from 'react';
import MovieList from './MovieList.jsx';
import dataMovies from '../data/data.js';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import searchMovieDB from '../apis/movieDB.js';

class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        this.setState({movies: dataMovies})
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

    onAddNewMovie = (userMovie) => {
        const userList = this.state.movies.slice()
        const newMovie = {title: userMovie, key: userMovie, status: "To Watch"};
        userList.push(newMovie)
        dataMovies.push(newMovie)
        this.setState({movies: userList})
    }

    onToggleMovie = () => {
        if(event.target.text === "All Movies"){
            var allMovies = [];
            dataMovies.forEach((movie)=>{
                allMovies.push(movie);
            });
            this.setState({
                movies: allMovies,
                });
        } else {
            for (var i=0; i<dataMovies.length; i++){
                if (dataMovies[i].status === event.target.text){
                    var movieList = dataMovies.filter((movie)=>{
                        return movie.status === event.target.text
                    });
                }
            }
            this.setState({
                movies: movieList,
                })
            }
    }
        
    render (){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <div className="ui top attached tabular menu">
                <a className="item active" onClick={this.onToggleMovie}>
                        All Movies
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
                <MovieList movies={this.state.movies} />
            </div>
        </div>
        )
    }
}

export default App;

