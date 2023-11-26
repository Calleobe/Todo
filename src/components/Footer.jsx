import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #2193b0; // Cool blue, same as primary color
  color: #fff; // White text for contrast
  font-size: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
`;

const StyledLink = styled.a`
  color: #ff2;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      &copy; 2023 TO-DO App, by
      <StyledLink
        href="https://github.com/Calleobe"
        target="_blank"
        rel="noopener noreferrer"
      >
        Carl Öberg
      </StyledLink>
      &
      <StyledLink
        href="https://github.com/fabio-cassisa"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fabio Cassisa.
      </StyledLink>
      Technigo 2023.
    </StyledFooter>
  );
};

export default Footer;
