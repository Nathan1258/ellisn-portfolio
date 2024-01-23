import React from "react";
import styled from "styled-components";

const navLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 5px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 5px solid;
  }
`;

const Link = styled.a`
  text-decoration: none;
  scroll-behavior: smooth;
  font-family: "CascadiaCode";
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <navLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/#">// home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/#about">// about</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/#my-work">// my work</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/#contact">// contact</Link>
        </LinkItem>
      </LinksWrapper>
    </navLinksContainer>
  );
}
