import styled from "styled-components";

export const DatailContainer = styled.div`
`

export const ProductDetail = styled.div`
    display: flex;
`

export const Image = styled.div`
    flex: 1;
    position: sticky;
`

export const Details = styled.div`
    flex: 1;
`

export const ProductImage = styled.img`
    width: 95%;
`

export const ProductName = styled.div`
    width: 100%;
`

export const ProductPrice = styled.div`
    font-weight: 500;
    font-size: 20px;
    color: #b5313a;
`

export const ATCart = styled.div`
    display: flex;
    width: 100%
`

export const ProductDes = styled.div`
    color: #333;
    width: 100%;
`

export const Name = styled.div`
    font-size: 27px;
    font-weight: 600;
    margin-bottom: 6px
`

export const Category = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonAdd = styled.button`
    flex: 2;
    height: 50px;
    background-color: rgb(181, 49, 58);
    border: none;
    padding: 0;
    margin-left: 10px;
    cursor: pointer;
    font-size: 18px;
    color: #fff; 
`

export const ChangeQuantity = styled.div`
    flex: 1;
    display: flex;
    height: 50px;
    background-color: rgb(247, 248, 250);
    border: none;
`

export const Asc = styled.button`
    flex: 1;
    border: none;
    color: #333;
    font-size: 18px;
    cursor: pointer;
`

export const Desc = styled.button`
    flex: 1;
    border: none;
    color: #333;
    font-size: 18px;
    cursor: pointer;
`

export const Quantity = styled.button`
    flex: 1;
    border: none;
    color: #333;
    font-size: 18px;
`

export const DesHead = styled.span`
    font-size: 20px;
    font-weight: 500;
`

export const RelatedProductTitle = styled.div`
text-align: center;
position: relative;
margin-bottom: 30px;

&::before{
    content: '';
    left: 0;
    right: 0;
    top: 50%;
    border-top: 1px solid #d2d2d2;
    position: absolute;
}

h2 {
    font-size: 25px;
    font-weight: 500;
    color: #222;
    margin: 0;
    padding: 0 20px;
    background-color: #fff;
    text-transform: uppercase;
    display: inline-block;
    position: relative
}
`
export const TextPrice = styled.span`
color: #878c8f;
font-size: 15px;
margin-right: 30px;
`

export const OldPrice = styled.span`
margin-left: 4px;
text-decoration: line-through;
`;