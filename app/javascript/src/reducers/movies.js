import {
  CREATE_MOVIE,
  CREATE_MOVIE_SUCCESS,
  FETCH_MOVIELISTS,
  FETCH_MOVIELISTS_FAIL,
  FETCH_MOVIELISTS_SUCCESS,
  CREATE_MOVIE_FAIL,
  DESTROY_MOVIE,
  DESTROY_MOVIE_FAIL,
  DESTROY_MOVIE_SUCCESS,
} from "../constants";

const initialState = {
  movies: [],
  error: false,
  pending: false,
};

const moviesReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FETCH_MOVIELISTS:
      return {
        ...initialState,
        pending: true,
      };

    case FETCH_MOVIELISTS_SUCCESS:
      const { movies } = action.payload;

      return {
        movies,
        error: false,
        pending: false,
      };

    case FETCH_MOVIELISTS_FAIL:
      return {
        ...state,
        error: true,
        pending: false,
      };

    case CREATE_MOVIE:
      return { ...state, pending: true };

    case CREATE_MOVIE_SUCCESS:
      const { movie } = action.payload;

      const newMovies = [...state.movies, movie];

      return { movies: newMovies, pending: true, error: false };

    case CREATE_MOVIE_FAIL:
      return {
        ...state,
        error: true,
        pending: false,
      };

    case DESTROY_MOVIE:
      return { ...state, pending: true };

    case DESTROY_MOVIE_SUCCESS:
      const { id } = action.payload;

      const filteredMovies = state.movies.filter((movie) => movie.id !== id);

      return { movies: filteredMovies, pending: true, error: false };

    case DESTROY_MOVIE_FAIL:
      return {
        ...state,
        error: true,
        pending: false,
      };

    default:
      return state;
  }
};

export default moviesReducer;
