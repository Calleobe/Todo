import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #ddd;
  color: black;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Header = () => {
  return <StyledHeader>TO-DO App</StyledHeader>;
};

export default Header;
