import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive/index";
import { MobileNavLinks } from "./mobileNavLinks";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  /* position: fixed; */
  /* box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13); */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0, 1.5em;
`;

const LeftSection = styled.div`
  width: 35%;
  display: flex;
  padding: 1.5em;
`;

const MiddleSection = styled.div`
  width: 30%;
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  width: 35%;
  justify-content: right;
  display: flex;
  padding: 1.5em;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && (
          <Accessibility
            isDarkTheme={props.isDarkTheme}
            toggleTheme={props.toggleTheme}
          />
        )}
        {isMobile && (
          <MobileNavLinks
            isDarkTheme={props.isDarkTheme}
            toggleTheme={props.toggleTheme}
          />
        )}
      </RightSection>
    </NavBarContainer>
  );
}
