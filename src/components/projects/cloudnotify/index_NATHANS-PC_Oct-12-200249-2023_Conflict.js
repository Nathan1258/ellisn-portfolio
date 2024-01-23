import React from "react";
import styled from "styled-components";

const CloudNotifyWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding-top: 5%;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CascadiaCode";
  font-size: 3rem;
`;

const Description = styled.p`
  width: 800px;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CascadiaCode";

  @media (max-width: 850px) {
    width: auto;
  }
`;

const Image = styled.img`
  display: flex;
  margin: auto;
  width: 240px;
  border-radius: 25px;
`;

export function CloudNotify(props) {
  return (
    <CloudNotifyWrapper>
      <Image src="https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/06/ec/e7/06ece725-beac-612d-0ef1-8a12bbb998a2/AppIcon-0-1x_U007emarketing-0-5-0-85-220.png/460x0w.webp" />
      <Title>Cloud Notify</Title>
      <Description>
        Cloud Notify is an application I made in response to my own personal
        issue. I needed a simple way to receive notifications on my phone based
        off of simple webhook events. Say I wanted to get a notification to my
        phone once GitHub and Docker has built a new image based off a recent
        code push, all I need is a simple URL to invoke to do so.
      </Description>
    </CloudNotifyWrapper>
  );
}
