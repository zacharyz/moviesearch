import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

const MovieList = (props) =>  {

  const renderList = () => {
    return props.movies.map(movie => {
      return (
        <tr key={movie.id}>
          <td data-label="Title">{movie.title}</td>
          <td data-label="ReleaseDate">{movie.release_date}</td>
          <td data-label="OverView">{movie.overview}</td>
        </tr>
      );
    });
  }

  return (
    <table className="ui basic table">
      <thead>
        <tr><th>Title</th>
          <th>Release Date</th>
          <th>Summary</th>
        </tr></thead>
      <tbody>
        {renderList()}
        
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(MovieList);
