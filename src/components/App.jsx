import React from 'react';
import MovieList from './MovieList.jsx';
import dataMovies from '../data/data.js';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            movies: [],
            watchedMovies: [],
            moviesToWatch: [],
            isHidden: false
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
        const matches = dataMovies.filter((movie)=>{
            return movie.title === term;
        }); 
        if (!matches.length) {
            alert('Looks like there\'s no movie by that title on record.\n' +
             'Please try another search.')
        } else{
            this.setState({movies: matches})
        }
    }

    onAddNewMovie = (userMovie) => {
        const userList = this.state.movies.slice()
        const newMovie = {title: userMovie, key: userMovie, status: "To Watch"};
        console.log(userList);
        userList.push(newMovie)
        dataMovies.push(newMovie)
        this.setState({movies: userList})
    }

    onToggleMovie = () => {
    
        console.log();
        const currentList = dataMovies.filter((movie)=>{
            return movie.status === event.target.text
        });
        this.setState({
            watchedMovies: currentList,
            movies: currentList,
            })
    }

    render (){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <div className="ui top attached tabular menu">
                    <a className="item active" onClick={this.onToggleMovie}>
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

