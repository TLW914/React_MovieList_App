import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("term in serch component", this.state.term)

        this.props.onFormSubmission(this.state.term);
    };
    
    onInputChange = (event)=>{
        this.setState({ term: event.target.value });
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <label>Search Movies</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        ></input>
                    </div>
                </form>
    
            </div>
        );
    }
}

export default SearchBar;
