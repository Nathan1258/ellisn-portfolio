import React from "react";
import styled from "styled-components";

const UpsendWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CascadiaCode";
  font-size: 3rem;
`;

export function Upsend(props) {
  return (
    <UpsendWrapper>
      <Title>Upsend</Title>
    </UpsendWrapper>
  );
}
