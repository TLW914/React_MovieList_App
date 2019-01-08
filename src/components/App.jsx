import React from 'react';
import MovieList from './MovieList.jsx';
import dataMovies from '../data/data.js';
import SearchBar from './SearchBar.jsx';

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
        this.setState({movies: matches})
    }

    render (){
        //fix git
        return (
            <div>
                <SearchBar onFormSubmission={this.onTermSubmit}/>
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default App;