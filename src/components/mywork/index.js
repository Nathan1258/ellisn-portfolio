import React from "react";
import styled from "styled-components";

const WorkWrapper = styled.div`
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  height: auto;
`;

const ProjectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  height: 600px;
  border-radius: 25px;
  background: #191919;
  transition: 330ms;

  &&:hover {
    transform: scale(1.01);
  }
`;

const ProjectContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 5%;
  top: 5%;
  height: 90%;
  width: 90%;
  /* z-index: 999; */

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  max-width: 240px;
  max-height: 240px;
  border-radius: 25px;
  margin: auto;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  color: white;
  font-family: "CascadiaCode";
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CascadiaCode";
  text-align: center;
  font-size: 3rem;
`;

const Description = styled.p`
  width: 300px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CascadiaCode";

  @media (max-width: 850px) {
    width: auto;
  }
`;

const CloudNotify = () => {
  return (
    <a href="/projects/cloud-notify">
      <ProjectWrapper>
        <ProjectContent>
          <ProjectImage src="https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/06/ec/e7/06ece725-beac-612d-0ef1-8a12bbb998a2/AppIcon-0-1x_U007emarketing-0-5-0-85-220.png/460x0w.webp" />
          <ProjectDescription>
            <Title>Cloud Notify</Title>
            <Description>
              Cloud Notify is an app I created out of my personal workflow
              needs. It allows you to send custom notifcations to your phone
              upon execution of a HTTP link.
            </Description>
          </ProjectDescription>
        </ProjectContent>
      </ProjectWrapper>
    </a>
  );
};

const Overload = () => {
  return (
    <a href="https://overloadworkout.com">
      <ProjectWrapper>
        <ProjectContent>
          <ProjectImage src="https://static.ellisn.com/ellisn/images/overload_logo.png" />
          <ProjectDescription>
            <Title>OVERLOAD</Title>
            <Description>
              OVERLOAD is a brand new fitness app concept in development. It builds upon the learnings from my past projects
                to offer a comprehensive solution that goes beyond what existing apps provide. I consider this my first main project.
            </Description>
          </ProjectDescription>
        </ProjectContent>
      </ProjectWrapper>
    </a>
  );
};

const UpSend = () => {
  return (
    <a href="/projects/upsend">
      <ProjectWrapper>
        <ProjectContent>
          <ProjectImage src="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/f4/46/9b/f4469bb7-ef63-6cee-c699-250e05db8ae2/AppIcon-85-220-0-4-2x.png/460x0w.webp" />
          <ProjectDescription>
            <Title>UpSend</Title>
            <Description>
              UpSend is an app for Apple Devices that allows users to upload any
              file which then automatically copies a download link to the user's
              clipboard to instantly share.
            </Description>
          </ProjectDescription>
        </ProjectContent>
      </ProjectWrapper>
    </a>
  );
};

const MenuBarWeather = () => {
  return (
    <a href="https://apps.apple.com/us/app/menubar-weather/id1662381447">
      <ProjectWrapper>
        <ProjectContent>
          <ProjectImage src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/22/05/fd/2205fd56-f4fd-9ceb-4280-e5eb798cf9d0/AppIcon-85-220-0-4-2x.png/460x0w.webp" />
          <ProjectDescription>
            <Title>Menu Weather</Title>
            <Description>
              MenuBar Weather is a recent release which allows users to get
              glanceable weather information right from their MenuBar on macOS.
            </Description>
          </ProjectDescription>
        </ProjectContent>
      </ProjectWrapper>
    </a>
  );
};

const YTRoyale = () => {
  return (
    <a href="/projects/ytroyale">
      <ProjectWrapper>
        <ProjectContent>
          <ProjectImage src="https://static.ellisn.com/ellisn/images/ytroyale_logo.png" />
          <ProjectDescription>
            <Title>YTRoyale</Title>
            <Description>
              YTRoyale is an on-going project in which I have created an online
              dashboard for a business to help manage, create and organise.
            </Description>
          </ProjectDescription>
        </ProjectContent>
      </ProjectWrapper>
    </a>
  );
};

export function MyWork(props) {
  return (
    <WorkWrapper id="my-work">
      <Title>My Work</Title>
      //   <Overload />
      // <br />
      // <br />
      // <br />
      // <br />
      <CloudNotify />
      <br />
      <br />
      <br />
      <br />
      <UpSend />
      <br />
      <br />
      <br />
      <br />
      <MenuBarWeather />
      <br />
      <br />
      <br />
      <br />
      <YTRoyale />
    </WorkWrapper>
  );
}
