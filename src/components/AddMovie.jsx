import React from 'react';

class AddMovie extends React.Component {
    constructor (props){
        super (props)
        this.state = {
            userMovie: ''
        }
    }

    onInputChange = (event) => {
        this.setState({ userMovie: event.target.value });
    }

    clearform = () =>
        this.setState({userMovie: ''})

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onAddMovie(this.state.userMovie);
        this.clearform();
    }

    render (){
        return (
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <label>Add Movies</label>
                        <input
                            type="text"
                            value={this.state.userMovie}
                            onChange={this.onInputChange}
                        ></input>
                    </div>
                </form>
    
            </div>
        )
    }
}

export default AddMovie;