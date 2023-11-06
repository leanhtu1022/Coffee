import { Button } from "antd";
import styled from "styled-components";

export const HomeSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HomeSectionImage = styled.img`
  max-width: 50px;
  padding: 8px 0 10px 8px;
  margin: 0px auto;
`;

export const HomeTittle = styled.a`
  text-decoration: none;
  color: #b5313a;
  display: grid;
  
  padding: 10px 0 0 0;
`;

export const DataContainer = styled.div`
  width: 100%;
`;

export const ButtonCategory = styled(Button)`
  width: 60%;
  background-color: #b5313a;
  display: flex;
  margin: 30px auto;
`;

export const TextSpan = styled.span`
  margin: auto;
  font-size: 26;
  font-weight: 700;
  color: #fff;
`;