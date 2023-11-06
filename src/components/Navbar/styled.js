import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavBarContainer = styled.div`
margin-top: 40px
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color:  #b5313a;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid #EEEDED;
  margin-left: 20px;
  font-size: 15px;
  padding: 0.8rem 30px;
  
  
  &:hover {
    color: #007bff;
  }

  &.active {
    background-color: #b5313a;
    color: #fff;
  }
`;