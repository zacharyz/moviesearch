import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index';

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = { searchQuery: ''};
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
   }

   onInputChange(event) {
      this.setState({ searchQuery: event.target.value})
   }
   onFormSubmit(event) {
      event.preventDefault();

      // fetch movies for that search query
      this.props.fetchMovies(this.state.searchQuery);
      // this.setState({searchQuery:''});
   }
   
   render() {
      return (
         <div className="ui menu">
            <div className="header item">NAVIS Movie Search</div>
            <div className="right menu">
               <div className="item">
                  <div className="ui action left icon input">
                     <i className="search icon"></i>
                     <form onSubmit={this.onFormSubmit} className="ui action left icon input">
                        <i className="search icon"></i>
                        <input
                           placeholder="Search for movies"
                           className="form-control"
                           value={this.state.searchQuery}
                           onChange={this.onInputChange}
                        />
                        <button className="ui button">Submit</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default connect(
   null,
   { fetchMovies }
)(SearchBar);