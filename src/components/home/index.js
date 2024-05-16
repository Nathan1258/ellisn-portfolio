import React, { useState } from "react";
import styled from "styled-components";

import Typewriter from "typewriter-effect";

const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  font-family: "CascadiaCode";
  text-align: center;
  font-size: 5rem;
  padding: 0;
  margin: 0;
`;

const Description = styled.p`
  font-family: "CascadiaCode";
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

export function Home(props) {
  const [isTitleTypedOut, setTitleTypedOut] = useState(false);

  return (
    <HomeWrapper>
      <TitleContainer>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Nathan Ellis")
              .callFunction(() => {
                setTitleTypedOut(true);
              })
              .pauseFor(14000)
              .deleteAll()
              .callFunction(() => {
                setTitleTypedOut(false);
              })
              .start();
          }}
        />
        {isTitleTypedOut ? (
          <Description>
            <Typewriter
              options={{
                strings: ["Team Player", "Web Developer.", "Software Engineer."],
                autoStart: true,
                loop: false,
              }}
            />
          </Description>
        ) : (
          <br />
        )}
      </TitleContainer>
    </HomeWrapper>
  );
}
