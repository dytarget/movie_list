import Axios from "axios";

export const createMovieRequest = async ({ name, movielistId }) =>
  await Axios.post("/api/v1/movies", { name, movielist_id: movielistId })
    .then((result) => result)
    .catch((error) => error);

export const deleteMovieRequest = async (id) =>
  await Axios.delete(`/api/v1/movies/${id}`)
    .then((result) => result)
    .catch((error) => error);
