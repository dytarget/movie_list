import { createMovieRequest, deleteMovieRequest } from "../api";
import {
  CREATE_MOVIE,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAIL,
  DESTROY_MOVIE,
  DESTROY_MOVIE_FAIL,
  DESTROY_MOVIE_SUCCESS,
} from "../constants";
import { isSuccessResponse } from "../utils";

export const createMovie = (movie) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MOVIE });

    const response = await createMovieRequest(movie);

    const { status } = response;

    if (isSuccessResponse(status)) {
      dispatch({
        type: CREATE_MOVIE_SUCCESS,
        payload: { movie: response.data.data },
      });
    } else {
      dispatch({ type: CREATE_MOVIE_FAIL, response });
    }
  };
};

export const deleteMovie = (id) => {
  return async (dispath) => {
    dispath({ type: DESTROY_MOVIE });

    const response = await deleteMovieRequest(id);

    const { status } = response;

    if (isSuccessResponse(status)) {
      dispath({ type: DESTROY_MOVIE_SUCCESS, payload: { id } });
    } else {
      dispath({ type: DESTROY_MOVIE_FAIL, response });
    }
  };
};
