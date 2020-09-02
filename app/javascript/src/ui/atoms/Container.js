import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width || "100%"};
  min-height: ${({ height }) => height};
  background-color: rgba(22, 23, 35);
  padding: 3rem;
  box-sizing: border-box;
`;
