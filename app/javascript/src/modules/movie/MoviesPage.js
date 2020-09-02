import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovielists, createMovie } from "../../actions";
import { Title, Text, PrimaryButton } from "../../ui/atoms";
import { MoviesGrid } from "./MoviesGrid";
import { Modal } from "../../ui/molecules";
import { NewMovieForm } from "./NewMovieForm";

const _MoviePage = (props) => {
  const [visibleNewMovieModal, handleNewMovieModal] = useState(false);

  useEffect(() => {
    props.fetchMovielists();
  }, []);

  const handleSubmit = ({ name }) => {
    const { id } = props.match.params;
    props.createMovie({ name, movielistId: id });
  };

  return (
    <>
      <Title>Movies of "{props.movielist?.attributes?.name}" list</Title>
      <PrimaryButton onClick={() => handleNewMovieModal(true)}>
        Add Movie
      </PrimaryButton>
      <MoviesGrid movies={props.moviesReducer.movies} />
      {props.moviesReducer.error && (
        <Text textColor="rgba(232, 62, 76, 0.75)" textSize="1.5rem">
          Occured error. Please check your steps, and try again!
        </Text>
      )}

      {visibleNewMovieModal && (
        <Modal isOpen onClose={() => handleNewMovieModal(false)} w="40rem">
          <NewMovieForm
            onClose={() => handleNewMovieModal(false)}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </>
  );
};

export const MoviesPage = connect(
  ({ moviesReducer, movielistsReducer }, { match }) => ({
    moviesReducer: {
      ...moviesReducer,
      movies: moviesReducer.movies.filter(
        (movie) => movie.attributes.movielist_id == match.params.id
      ),
    },
    movielist: movielistsReducer.movielists.find(
      (movielist) => movielist.id === match.params.id
    ),
  }),
  {
    fetchMovielists,
    createMovie,
  }
)(_MoviePage);
