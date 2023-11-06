import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import styled from "styled-components";


export const ProductContainer = styled.div`
margin: 0 10px;
transition: transform 0.3s ease;
transform-origin: center bottom;
position: relative;
&:hover {
  transform: scale(1.02);
}
`;


export const ProductImg = styled.img`
`;

export const CardProduct = styled(Card)`
  
`;

export const MetaProduct = styled(Meta)`

`;

export const Buy = styled(Button)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #b5313a;
  border-color: #b5313a;
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    background-color: #b5313a;
    border-color: #b5313a !important;
    color: #fff !important;
  }

  span {
    font-size: 18px;
    font-weight: 600
  }
`;

export const Price = styled.span`
  color: #b5313a;
  font-size: 18px;
  margin-top: 20px;

  
`

export const OldPrice = styled.span`
font-size: 15px;
margin-left: 4px;
color: #878c8f;
text-decoration: line-through;
`;

