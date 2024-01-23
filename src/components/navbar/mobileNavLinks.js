import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";

import { MenuToggle } from "./menuToggle";

const navLinksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  font-weight: 500;
  font-size: 17px;
  display: flex;

  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <navLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="#">// home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#about">// about</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#my-work">// my work</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#contact">// contact</Link>
          </LinkItem>
          <Marginer />
          <Accessibility
            isDarkTheme={props.isDarkTheme}
            toggleTheme={props.toggleTheme}
          />
        </LinksWrapper>
      )}
    </navLinksContainer>
  );
}
