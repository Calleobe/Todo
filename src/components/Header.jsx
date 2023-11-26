import styled from "styled-components";

const StyledHeader = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #2193b0; // Cool blue, same as primary color
  color: #fff; // White text for contrast
  font-size: 22px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
`;

const Header = () => {
  return <StyledHeader>My tasks</StyledHeader>;
};

export default Header;
