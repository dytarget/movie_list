import styled from "styled-components";
import { prop } from "styled-tools";

export const Text = styled.div`
  color: ${prop("textColor", "inherit")};
  font-size: ${prop("textSize", "inherit")};
  font-weight: ${prop("textWeight", "inherit")};
  text-align: ${prop("textAlign", "unset")};
  text-transform: ${prop("textTransform", "unset")};
  text-decoration: none !important;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  word-break: break-all;

  &:hover {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:link {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
`;
