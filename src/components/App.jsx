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
        };
    }

    componentDidMount() {
        this.setState({movies: dataMovies})
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
        var userList = this.state.movies.slice()
        const newMovie = {title: userMovie, key: userMovie};
        console.log(userList);
        userList.push(newMovie)
        this.setState({movies: userList})
    }

    render (){
        return (
            <div>
                <SearchBar onFormSubmission={this.onTermSubmit}/>
                <button onClick={(e)=>{this.setState({movies:dataMovies})}}>Reset</button>
                <AddMovie onAddMovie={this.onAddNewMovie}/>
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default App;