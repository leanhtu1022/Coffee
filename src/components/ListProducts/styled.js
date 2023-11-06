import { Button } from "antd";
import styled from "styled-components";

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

export const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SildeStyled = styled.div`
  position: relative;
  .slick-prev:before,
  .slick-next:before {
    display: block;
    color: black;
  }
  .slick-prev:after,
  .slick-next:after {
    display: block;
    color: black;
  }
  .slick-prev {
    left: 0px;
    z-index: 10;
    background: transparent;
    display: block;
  }
  .slick-next {
    right: 0;
    z-index: 10;
    background: transparent;
  }
`

