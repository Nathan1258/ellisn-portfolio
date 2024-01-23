import "./App.css";
import { Home } from "./components/home";
import { MyWork } from "./components/mywork";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import React, { useState, useEffect } from "react";

import { inject } from "@vercel/analytics";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CloudNotify } from "./components/projects/cloudnotify";
import { Upsend } from "./components/projects/upsend";

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
`;

function App() {
  inject();

  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    // Check for the hash in the URL and scroll to the corresponding element
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return (
    <Router>
      <AppContainer>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <>
            <GlobalStyles />
            <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

            <Routes>
              <Route path="/" element={<PageWrapper />}></Route>
              <Route path="/projects/cloud-notify" element={<CloudNotify />} />
              <Route path="/projects/upsend" element={<Upsend />} />
            </Routes>

            <Footer />
          </>
        </ThemeProvider>
      </AppContainer>
    </Router>
  );
}

const PageWrapper = () => {
  return (
    <div>
      <Home />
      <About />
      <MyWork />
       <Contact />
    </div>
  );
};

export default App;
