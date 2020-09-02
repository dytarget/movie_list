import Axios from "axios";

export const fetchMovielistsRequest = async () =>
  await Axios.get("/api/v1/movielists")
    .then((result) => result)
    .catch((error) => error);

export const createMovielistRequest = async ({ name }) =>
  await Axios.post("/api/v1/movielists", { name })
    .then((result) => result)
    .catch((error) => error);

export const deleteMovielistRequest = async (id) =>
  await Axios.delete(`/api/v1/movielists/${id}`)
    .then((result) => result)
    .catch((error) => error);
