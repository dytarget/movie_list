import { combineReducers } from "redux";
import movielists from "./movielists";
import movies from "./movies";

export default combineReducers({
  movielistsReducer: movielists,
  moviesReducer: movies,
});
