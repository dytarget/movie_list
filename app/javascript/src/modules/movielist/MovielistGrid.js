import React from "react";
import styled from "styled-components";
import { MovielistGridItem } from "./MovielistGridItem";

export const MovielistGrid = ({ movielists = [] }) => {
  return (
    <MovielistGridContainer>
      {movielists.map((movielist) => (
        <MovielistGridItem key={`${movielist.id}`} movielist={movielist} />
      ))}
    </MovielistGridContainer>
  );
};

const MovielistGridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;
