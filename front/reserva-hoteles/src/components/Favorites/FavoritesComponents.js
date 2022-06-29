import styled from "styled-components";
import { Link } from "react-router-dom";

export const FavoriteContainer = styled.div`
    background: ${(props) => props.theme.content_background};
    width: 100%;
`

export const BodyFavorite = styled.div`
    padding: 2rem 4rem;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.primary};
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const ErrorBlock = styled.div`
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 350px){
        padding: 1rem;
    }
`

export const ErrorMessage = styled.h1`
    text-align: center;
    color: ${(props) => props.theme.primary};
`
export const ErrorButton =  styled(Link)`
    background: ${(props) => props.theme.primary};
    width: 200px;
    height: 50px;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    color: white;
    border-radius: 5px;
    &:hover {
        background: ${(props) => props.theme.secondary};
        color: white;
    }
    @media screen and (max-width: 350px){
        width: 100%;
    }
`