import styled from 'styled-components';
import { Menu } from 'antd';

export const LoginContainer = styled.div`
  margin-top: 5vh;
  padding-bottom: 2rem;
  border-box: 1px black solid;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const LoginSize = styled.div`
  max-width: 80%;
  margin: auto;
`;

export const LoginContent = styled.p`
  font-weight: 300;
  max-width: 350px;
`;

export const LoginImage = styled.img`
  max-height: 350px;
  width: 100%;
`;

export const LoginTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  padding: 20px 0;
`;

export const LoginIcon = styled.div`
  display: flex
`;

export const LoginMenu = styled(Menu)`
  background-color: transparent;
  border: none;
  line-height: 64px;
  padding: 0 0 30px 0;
`;

export const LoginItem = styled(Menu.Item)`
  margin: 0 1rem;
  font-size: 16px;
  color: #fffff;
`;