import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Text } from "../../ui/atoms";
import { TrashIcon } from "../../ui/icons";
import { deleteMovie } from "../../actions";

export const _MovieGridItem = ({ movie, deleteMovie }) => {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>
        <Container>
          <IconContainer
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("HELLO");
              deleteMovie(movie.id);
            }}
          >
            <Text textColor="white" textSize="1.2rem">
              <TrashIcon />
            </Text>
          </IconContainer>
          <Text textColor="white" textSize="1.2rem">
            {movie.attributes.name}
          </Text>
        </Container>
      </Link>
    </li>
  );
};

export const MovieGridItem = connect(
  ({ moviesReducer }) => ({ moviesReducer }),
  {
    deleteMovie,
  }
)(_MovieGridItem);

const Container = styled.div`
  height: 4rem;
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background-color: transparent;
  transition: background-color 0.15s;
  overflow: hidden;
  display: flex;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const IconContainer = styled.div`
  min-width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;
