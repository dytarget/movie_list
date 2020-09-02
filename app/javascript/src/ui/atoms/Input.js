import React from "react";
import { prop } from "styled-tools";
import styled from "styled-components";

export const BaseInput = styled.input`
  background-color: transparent;
  width: ${prop("w", "20rem")};
  height: ${prop("h", "3rem")};
  color: white;
  border: solid 1px white;
  text-align: left;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 1rem;
  padding: 0 1rem;
`;
