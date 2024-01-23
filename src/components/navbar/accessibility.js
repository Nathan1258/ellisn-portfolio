import React, { useState } from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const ToggleThemeButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  font-family: "CascadiaCode";
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <AccessibilityContainer>
      <ToggleThemeButton onClick={props.toggleTheme}>
        {props.isDarkTheme ? (
          <span aria-label="Light mode" role="img">
            Toggle theme 🌞
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            Toggle theme 🌜
          </span>
        )}
      </ToggleThemeButton>
    </AccessibilityContainer>
  );
}
