import {
  CREATE_MOVIELIST,
  CREATE_MOVIELIST_SUCCESS,
  FETCH_MOVIELISTS,
  FETCH_MOVIELISTS_FAIL,
  FETCH_MOVIELISTS_SUCCESS,
  CREATE_MOVIELIST_FAIL,
  DESTROY_MOVIELIST,
  DESTROY_MOVIELIST_FAIL,
  DESTROY_MOVIELIST_SUCCESS,
} from "../constants";

const initialState = {
  movielists: [],
  error: false,
  pending: false,
};

const movielistsReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FETCH_MOVIELISTS:
      return {
        ...initialState,
        pending: true,
      };

    case FETCH_MOVIELISTS_SUCCESS:
      const { movielists } = action.payload;

      return {
        movielists,
        error: false,
        pending: false,
      };

    case FETCH_MOVIELISTS_FAIL:
      return {
        ...state,
        error: true,
        pending: false,
      };

    case CREATE_MOVIELIST:
      return { ...state, pending: true };

    case CREATE_MOVIELIST_SUCCESS:
      const { movielist } = action.payload;

      const newMovielists = [...state.movielists, movielist];

      return { movielists: newMovielists, pending: false, error: false };

    case CREATE_MOVIELIST_FAIL:
      return {
        ...state,
        error: true,
        pending: false,
      };

    case DESTROY_MOVIELIST:
      return { ...state, pending: true };

    case DESTROY_MOVIELIST_SUCCESS:
      const { id } = action.payload;

      const filteredMovielists = state.movielists.filter(
        (movielist) => movielist.id !== id
      );

      return { movielists: filteredMovielists, pending: true, error: false };

    case DESTROY_MOVIELIST_FAIL:
      return {
        ...state,
        error: true,
        pending: false,
      };

    default:
      return state;
  }
};

export default movielistsReducer;
