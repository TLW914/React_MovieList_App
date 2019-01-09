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
            <div className="ui transparent icon input">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <input className="search link icon"
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Search Movies..."
                        ></input>
                        
                    </div>
                </form>
    
            </div>
        );
    }
}

 {/* <div className="ui transparent icon input">
                        <input type="text" placeholder="Search Movies..."></input>
                            <i className="search link icon"></i>
                </div> */}

export default SearchBar;
