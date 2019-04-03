import movieDb from '../apis/movieDb';

export const fetchMovies = (searchString) => async dispatch => {
  const apiKey = "057dfa32a18eed0f2dc23dc2e80ed8a0";
  const response = await movieDb.get('/movie?page=1&include_adult=false&language=en-US&api_key=' + apiKey + '&query=' + searchString);
  console.log('fetch movies response', response);
  dispatch({ type: 'FETCH_MOVIES', payload: response.data.results });
};
