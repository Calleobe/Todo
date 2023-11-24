import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  font-size: 12px;
  padding: 10px;
  background-color: #ddd;
  color: black;
  border-radius: 4px;
  margin-top: 20px;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    color: black;
    text-decoration: underline;
  }
  
  &:visited {
    color: black;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      &copy; 2023 TO-DO App, by
      <StyledLink href="https://github.com/Calleobe" target="_blank" rel="noopener noreferrer">
        Carl Öberg
      </StyledLink>
      &
      <StyledLink href="https://github.com/fabio-cassisa" target="_blank" rel="noopener noreferrer">
        Fabio Cassisa.
      </StyledLink>
      Technigo 2023.
    </StyledFooter>
  );
};

export default Footer;
