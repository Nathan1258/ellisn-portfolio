import React from "react";
import styled from "styled-components";

const Description = styled.a`
  text-align: center;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: inherit;
  cursor: pointer;
  font-family: "CascadiaCode";
  padding-bottom: 20px;
`;

export function Footer(props) {
  return (
    <Description href="https://github.com/Nathan1258/ellisn-portfolio">
      Designed and built by Nathan Ellis
    </Description>
  );
}
