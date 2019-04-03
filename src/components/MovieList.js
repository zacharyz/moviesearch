import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class MovieList extends React.Component {

  renderList() {
    return this.props.movies.map(movie => {
      return (
        <tr key={movie.id}>
          <td data-label="Title">{movie.title}</td>
          <td data-label="ReleaseDate">{movie.release_date}</td>
          <td data-label="OverView">{movie.overview}</td>
        </tr>
      );
    });
  }

  render() {
    return (<table className="ui basic table">
      <thead>
        <tr><th>Title</th>
          <th>Release Date</th>
          <th>Summary</th>
        </tr></thead>
      <tbody>
        {this.renderList()}
        
      </tbody>
    </table>);
  }
}

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(MovieList);
