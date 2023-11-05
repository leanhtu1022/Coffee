import styled from 'styled-components';
import { Button } from 'antd';
import { NavLink, Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
background-color: #b5313a;
  color: #fff;
  padding: 1rem 0;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const HeaderSize = styled.div`
  width: 80%;
  margin: auto;
`;

export const Logo = styled.img`
  max-height: 50px;
`;

export const HeaderMenu = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  float: right;
`;

export const MenuItem = styled.div`
  margin: 0 1rem;
  font-size: 16px;
  &:hover {
    color: #A9A9A9;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color:  #b5313a;
  font-weight: bold;
  padding: 0.8rem 30px;
  border-radius: 10px;
  border: 1px solid #EEEDED;
  margin-left: 20px;
  
  
  &:hover {
    color: #007bff;
  }

  &.active {
    background-color: #b5313a;
    color: #fff;
  }
`;

export const StyledLink = styled(Link)`
color: white;
font-size: medium;
display: grid;
float: right;
}
`

export const MenuItemText = styled.span`
@media (max-width: 800px) {
  display: none;
}
`
export const ButtonSearch = styled(Button)`
float: right;
background-color: transparent;
border-color: transparent;
color: white;
font-weight: 600;
font-size: 16px
}
`