import {
  fetchMovielistsRequest,
  createMovielistRequest,
  deleteMovielistRequest,
} from "../api";
import {
  CREATE_MOVIELIST,
  CREATE_MOVIELIST_SUCCESS,
  CREATE_MOVIELIST_FAIL,
  DESTROY_MOVIELIST,
  DESTROY_MOVIELIST_FAIL,
  DESTROY_MOVIELIST_SUCCESS,
  FETCH_MOVIELISTS,
  FETCH_MOVIELISTS_FAIL,
  FETCH_MOVIELISTS_SUCCESS,
} from "../constants";
import { isSuccessResponse } from "../utils";

export const fetchMovielists = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_MOVIELISTS });

    const response = await fetchMovielistsRequest();
    const { status, data: result } = response;

    if (isSuccessResponse(status)) {
      dispatch({
        type: FETCH_MOVIELISTS_SUCCESS,
        payload: { movielists: result.data, movies: result.included },
      });
    } else {
      dispatch({ type: FETCH_MOVIELISTS_FAIL, response });
    }
  };
};

export const createMovielist = ({ name }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MOVIELIST });

    const response = await createMovielistRequest({ name });

    const { status } = response;

    if (isSuccessResponse(status)) {
      dispatch({
        type: CREATE_MOVIELIST_SUCCESS,
        payload: { movielist: response.data.data },
      });
    } else {
      dispatch({ type: CREATE_MOVIELIST_FAIL, response });
    }
  };
};

export const deleteMovielist = (id) => {
  return async (dispath) => {
    dispath({ type: DESTROY_MOVIELIST });

    const response = await deleteMovielistRequest(id);

    const { status } = response;

    if (isSuccessResponse(status)) {
      dispath({ type: DESTROY_MOVIELIST_SUCCESS, payload: { id } });
    } else {
      dispath({ type: DESTROY_MOVIELIST_FAIL, response });
    }
  };
};
