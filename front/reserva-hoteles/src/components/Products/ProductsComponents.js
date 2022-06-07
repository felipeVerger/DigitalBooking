import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsContainer = styled.div`
    background: white;
    width: 100vw;
    max-width: 1204px;
`

export const ProductsBody = styled.div`
    padding: 2rem 0rem 2rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.h2`
    color: ${(props) => props.theme.primary};
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 10px;
`

export const ProductsBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`
export const Product = styled.div`
    display: flex;
    background: white;
    border: 1px solid #dfe4ea;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
`

export const TitleLink = styled(Link)`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: ${(props) => props.theme.primary};
    }
`

export const Image = styled.img`
    width: 420px;
    height: 100%;
    border-radius: 8px;
    &:hover {
        opacity: 0.8;
    }
`

export const InfoBlock = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

export const TopInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CategoryBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Category = styled.h5`
    font-family: "Quicksand";
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: ${(props) => props.theme.primary};
    opacity: 0.5;
    text-transform: uppercase;
`

export const Name = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${(props) => props.theme.primary};
`

export const Location = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
`

export const PunctuationBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
`

export const Punctuation = styled.span`
    background-color: ${(props) => props.theme.secondary};
    width: 30px;
    height: 23px;
    text-align: center;
    border-radius: 7px 7px 7px 0px;
    color: white;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
`

export const Opinion = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.primary};
  text-align: right;
`;

export const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
`
export const Button = styled.button`
    
`
export const TextPrice = styled.span`
    color: ${(props) => props.theme.secondary};
    font-size: 14px;
    font-weight: 300;
`

export const Price = styled.span`
    font-size: 2rem;
    font-weight: 700;
`

