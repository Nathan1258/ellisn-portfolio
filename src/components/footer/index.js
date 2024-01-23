import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 25px;
`;

const Description = styled.a`
  text-align: center;
  width: 80%;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: inherit;
  cursor: pointer;
  font-family: "CascadiaCode";
`;


export function Footer(props) {
  return (
    <FooterWrapper>
      <Description href="https://github.com/Nathan1258/ellisn-portfolio">
        Designed and built by Nathan Ellis
      </Description>
    </FooterWrapper>
  );
}
