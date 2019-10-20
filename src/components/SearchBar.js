import React from "react";
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index';

const SearchBar = (props) => {
   const [query, setQuery] = React.useState('');

   const onInputChange = event => {
      setQuery(event.target.value);
   }
   
   const onFormSubmit = event => {
      event.preventDefault();
      // fetch movies for that search query
      props.fetchMovies(query);
   }
   
   return (
      <div className="ui menu">
         <div className="header item">Movie Search</div>
         <div className="right menu">
            <div className="item">
               <div className="ui action left icon input">
                  <i className="search icon"></i>
                  <form onSubmit={onFormSubmit} className="ui action left icon input">
                     <i className="search icon"></i>
                     <input
                        placeholder="Search for movies"
                        className="form-control"
                        value={query}
                        onChange={onInputChange}
                     />
                     <button className="ui button">Submit</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default connect(
   null,
   { fetchMovies }
)(SearchBar);