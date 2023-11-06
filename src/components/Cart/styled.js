import styled from 'styled-components'

export const CartContainer = styled.div`
`

export const CommonDiv = styled.div`
    width: 100%;
`

export const CartBody = styled.div`
    width: 100%;
    position: relative;
`

export const CartDetails = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const CartHead = styled.div`
    font-weight: 500;
    margin-bottom: 50px;
`

export const Tittle = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 42px;
`

export const DivImage = styled.div`
    width: 100%;
    flex: 1;
`

export const ProductImage = styled.img`
    height: 80%;
    width: 70%;
`

export const ProductName = styled.div`
    flex: 2;
    font-size: 17px;
    font-weight: 500;
`

export const ProductCategory = styled.div`
    flex: 2;
`

export const ProductPrice = styled.div`
    flex: 1;    
    color: #b5313a;
    font-weight: 500;
    text-align: center;
`

export const Quantity = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 14px;
`

export const Change = styled.div`
    display: flex;
    height: 28px;
    margin-bottom: 6px;
`

export const Desc = styled.button`
    flex: 1;
    cursor: pointer;
    background-color: #e9ecef;
    border: none;
`

export const ChangeQuantity = styled.button`
    flex: 1;
    background-color: #fbfbfb;
    border: none;
`

export const Asc = styled.button`
    flex: 1;
    cursor: pointer;
    background-color: #e9ecef;
    border: none;
`

export const TotalPrice = styled.div`
    flex: 1;
    color: #b5313a;
    font-weight: 500; 
    text-align: center;
`

export const Action = styled.div`
    flex: 1;
    display: flex;
`

export const ButtonAction = styled.button`
    background-color: #fff;
    border: none;
    font-weight: 600;
    font-size: 14px;
    height: 40px;
    padding: 0;
    &:hover {
        color: #b5313a !important;
        cursor: pointer 
    }
`

export const CheckBoxPay = styled.input`
`


export const PayAll = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    // position: absolute;
    // bottom: 0;
    // right: 0;
`

export const ButtonPayAll = styled.button` 
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    background-color: #b5313a;
    height: 40px;
    width: 200px;
    border: none;
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`

export const DeleteAll = styled.button`
    background-color: #fff;
    border: none;
    font-weight: 500;
    font-size: 16px;
    height: 40px;
    padding: 0;
    &:hover {
        color: #b5313a !important;
        cursor: pointer 
    }
`