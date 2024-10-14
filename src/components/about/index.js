import React from "react";
import styled from "styled-components";
import { BsTerminalFill, BsFillHddNetworkFill } from "react-icons/bs";
import { AiFillExperiment } from "react-icons/ai";

const AboutWrapper = styled.div`
  justify-content: center;
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

const Description = styled.p`
  text-align: center;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 75%;
  font-family: "CascadiaCode";
`;

const StatsWrapper = styled.div`
  display: grid;
  display: grid;
  margin: 0 auto;
  /* gap: 1rem; */
  row-gap: 20px;
  column-gap: 20px;
  padding: 20px;

  /* For grid responsiveness */
  @media (min-width: 800px) {
    transition: 0.2s;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 900px) {
    transition: 0.2s;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Stat = styled.div`
  width: auto;
  height: auto;
  background: #191919;
  border-radius: 15px;
  padding: 20px;
  font-size: 30px;
  text-align: center;
  transition: 330ms;
  text-decoration: none;
`;

const StatTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-family: "CascadiaCode";
`;

const StatDescription = styled.p`
  font-size: 1rem;
  color: white;
  font-family: "CascadiaCode";
`;

const StatsDescriptionHeader = styled.p`
  color: purple;
  font-weight: bold;
  padding: 0px;
  margin: 0px;
`;

export function About(props) {
  return (
    <AboutWrapper id="about">
      <Title>About me</Title>
      <Description>
        Hi 👋 My name is Nathan Ellis, I'm {" "} {getAge()} years old and I live in the United Kingdom.
        I studied for a BSc in Computer Science at Nottingham, where I achieved a first-class honors degree. 
        I am currently pursuing a Master's degree in Applied Data Science while working as a Software Engineer at ETAS (Bosch).
      </Description>
      <br />
      <Description>
        I describe myself as a passionate developer who loves working within
        teams, creating projects and contributing to open source code.I love to
        work on personal and commercial projects to improve on my overall
        knowledge and developing skills.
      </Description>
      <br />
      <Description>
        In my free time I play Rugby, go to the gym, playing games and
        maintaining my at-home server infrastructure to host all my projects and
        store all my files.
      </Description>
      <br />
      <StatsWrapper>
        <Stat>
          {/* Student */}
          <StatTitle>
            <BsFillHddNetworkFill />
            Networking
          </StatTitle>
          <StatDescription>
            I like to learn networking topics through projects.
            <br />
            <br />
            <br />
            <StatsDescriptionHeader>
              I have knowledge in:
            </StatsDescriptionHeader>
            <br />
            <br />
            Docker, containerizing apps, and Kubernetes orchestration
            <br />
            <br />
            Writing C++ code for network protocols
            <br />
            <br />
            AWS/GCP cloud infrastructure
            <br />
            <br />
            Creating and maintaining a corporate network inlcuding building and
            maintaining my home servers
            <br />
            <br />
            Server-side languages like Go and Node
            <br />
            <br />
            Penatration testing networks using tools like Metasploit
            <br />
            <br />
          </StatDescription>
        </Stat>
        {/* Developer */}
        <Stat>
          <StatTitle>
            <BsTerminalFill />
            Software Engineering
          </StatTitle>
          <StatDescription>
            I have been coding since I was 13 years old.
            <br />
            <br />
            <br />
            <br />
            <StatsDescriptionHeader>Languages I use:</StatsDescriptionHeader>
            <br />
            <br />
            Python, C++, Go, HTML, CSS, JavaScript, Swift
            <br />
            <br />
            <br />
            <StatsDescriptionHeader>
              Frameworks/Programs I use:
            </StatsDescriptionHeader>
            <br />
            <br />
            Unity3D, GCP, Terminal, Git, Express, React, Docker, JetBrains
            <br />
            <br />
            <br />
            <StatsDescriptionHeader>
              Languages/Frameworks I have dabbled with:
            </StatsDescriptionHeader>
            <br />
            <br />
            C++, Rust, Razor, Kubernetes, Azure
            <br />
            <br />
          </StatDescription>
        </Stat>
        {/* Experience */}
        <Stat>
          <StatTitle>
            <AiFillExperiment />
            Experience
          </StatTitle>
          <StatDescription>
            I have had the privilege to work with others already
            <br />
            <br />
            <br />
            <StatsDescriptionHeader>NCC Group Trust</StatsDescriptionHeader>
            <br />
            <br />
            I worked with their penatration testers and cyber analytic team to
            learn and apply topics in white-hat hacking to test networks and
            programs for vulnerabilities.
            <br />
            <br />
            <br />
            <StatsDescriptionHeader>
              Cyber-First Advanced SCQF
            </StatsDescriptionHeader>
            <br />
            <br />
            Took part of a week-long course with other students in Cyber
            Security putting our knowledge to practice with labs and
            environments.
          </StatDescription>
        </Stat>
      </StatsWrapper>
    </AboutWrapper>
  );
}

function getAge() {
  var today = new Date();
  var birthDate = new Date("2002/12/08");
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
