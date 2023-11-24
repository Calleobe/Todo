import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #ddd;
  color: black;
  font-size: 22px;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Header = () => {
  return <StyledHeader>My tasks</StyledHeader>;
};

export default Header;
