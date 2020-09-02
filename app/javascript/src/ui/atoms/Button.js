import React from "react";
import { prop } from "styled-tools";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  button {
    background-color: ${prop("bg", `rgba(0, 209, 184, 1)`)};
    min-width: ${prop("minW", "20rem")};
    color: ${prop("textColor", "white")};
    text-transform: uppercase;
    padding: 1.6rem 2rem 1.4rem;
    box-shadow: 0 5px 15px 0 rgba(0, 163, 144, 0.3);
    letter-spacing: 1px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    margin-bottom: 15px;
  }

  button:disabled {
     background-color: rgba(0, 127, 112, 1);
  }

  button:hover {
    background-color: rgba(0, 127, 112, 1);
`;

export const PrimaryButton = ({
  children,
  bg,
  textColor,
  minW,
  className,
  type,
  ...rest
}) => (
  <ButtonWrapper
    bg={bg}
    textColor={textColor}
    minW={minW}
    className={className}
  >
    <button type={type} {...rest}>
      {children}
    </button>
  </ButtonWrapper>
);
