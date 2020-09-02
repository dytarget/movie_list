import React, { useState } from "react";
import { PrimaryButton, BaseInput } from "../../ui/atoms";
import styled from "styled-components";

export const NewMovieForm = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name });
        onClose();
      }}
    >
      <Container>
        <BaseInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Movie name"
          h="3rem"
          w="30rem"
          type="text"
        />

        <PrimaryButton onClick={() => onClose()}>Close</PrimaryButton>
        <PrimaryButton disabled={!name} type="submit">
          Create
        </PrimaryButton>
      </Container>
    </form>
  );
};

const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
