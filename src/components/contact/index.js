import React from "react";
import styled from "styled-components";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 50vh;
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    
    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CascadiaCode";
  font-size: 3rem;
`;

const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #191919;
    border: 1px solid #222222;
    border-radius: 8px;
    box-sizing: border-box;
    color: white;
    text-decoration: none;
    cursor: pointer;
    width: 20%;
    padding: 20px;
    margin: 20px;
    transition: transform 250ms;
    
    a{
        text-decoration: none;
        color: #222222;
    }
    
    &:hover {
        transform: scale(1.1);
    }
    
    &:hover::after{
        transition: transform 250ms;
        transform: scale(1);
    }
    @media (max-width: 550px) {
        width: 80%;
        flex-direction: column;
    }
`;

export function Contact(props) {

  return (
    <ContactWrapper id="contact">
        <Title>Contact</Title>
        <ButtonWrapper>
            <Button onClick={() => {window.location.href="mailto:nathan@ellisn.com"}}>
                <IoIosMail size={50}/>
                <p>Email me</p>
            </Button>
            <Button onClick={() => {window.location.href="https://github.com/Nathan1258";}}>
                <FaGithub size={50}/>
                <p>My GitHub</p>
            </Button>
            <Button onClick={() => {window.location.href="https://www.linkedin.com/in/nathan1258/";}}>
                <FaLinkedin size={50}/>
                <p>My Linkedin</p>
            </Button>
        </ButtonWrapper>
    </ContactWrapper>
  );
}
