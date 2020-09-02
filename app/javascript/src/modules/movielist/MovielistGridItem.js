import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Text } from "../../ui/atoms";
import { TrashIcon } from "../../ui/icons";
import { deleteMovielist } from "../../actions";

export const _MovielistGridItem = ({ movielist, deleteMovielist }) => {
  return (
    <li>
      <Link to={`/movielist/${movielist.id}`}>
        <Container>
          <IconContainer
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("HELLO");
              deleteMovielist(movielist.id);
            }}
          >
            <Text textColor="white" textSize="1.2rem">
              <TrashIcon />
            </Text>
          </IconContainer>
          <Text textColor="white" textSize="1.2rem">
            {movielist.attributes.name} (
            {movielist.relationships.movies.data.length || 0})
          </Text>
        </Container>
      </Link>
    </li>
  );
};

export const MovielistGridItem = connect(
  ({ movielistsReducer }) => ({ movielistsReducer }),
  {
    deleteMovielist,
  }
)(_MovielistGridItem);

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
