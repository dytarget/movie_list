import React from "react";
import styled from "styled-components";
import { MovieGridItem } from "./MoviesGridItem";
import { Text } from "../../ui/atoms";

export const MoviesGrid = ({ movies = [] }) => {
  return (
    <MovieGridContainer>
      {movies.map((movie) => (
        <MovieGridItem key={`${movie.id}`} movie={movie} />
      ))}
      {movies.length === 0 && (
        <Text textColor="white" textSize="1rem">
          Empty...
        </Text>
      )}
    </MovieGridContainer>
  );
};

const MovieGridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;
