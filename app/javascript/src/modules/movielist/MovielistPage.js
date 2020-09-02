import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovielists, createMovielist } from "../../actions";
import { Title, Text, PrimaryButton } from "../../ui/atoms";
import { MovielistGrid } from "./MovielistGrid";
import { Modal } from "../../ui/molecules";
import { NewMovielistForm } from "./NewMovielistForm";
import { prop } from "styled-tools";

const _MovielistPage = (props) => {
  const [visibleNewMovielistModal, handleNewMovielistModal] = useState(false);

  useEffect(() => {
    props.fetchMovielists();
  }, []);

  return (
    <>
      <Title>Movielists</Title>
      <PrimaryButton onClick={() => handleNewMovielistModal(true)}>
        Add Movielist
      </PrimaryButton>
      <MovielistGrid movielists={props.movielistsReducer.movielists} />
      {props.movielistsReducer.error && (
        <Text textColor="rgba(232, 62, 76, 0.75)" textSize="1.5rem">
          Occured error. Please check your steps, and try again!
        </Text>
      )}

      {visibleNewMovielistModal && (
        <Modal isOpen onClose={() => handleNewMovielistModal(false)} w="40rem">
          <NewMovielistForm
            onClose={() => handleNewMovielistModal(false)}
            onSubmit={props.createMovielist}
          />
        </Modal>
      )}
    </>
  );
};

export const MovielistPage = connect(
  ({ movielistsReducer }) => ({ movielistsReducer }),
  {
    fetchMovielists,
    createMovielist,
  }
)(_MovielistPage);
