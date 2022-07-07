import styled from "styled-components";
import { Link } from "react-router-dom";
import {MdOutlineArrowBackIos} from "react-icons/md";

export const HeaderBody = styled.div`
  background: ${(props) => props.theme.primary};
  width: 100%;
  
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media only screen and (max-width: 1280px) {
    font-size: 12px;
  }
`;

export const HeaderBlock = styled.div`
  width: 100vw;
  max-width: 1920px;
  padding: 1rem 2rem 1rem 0rem;
  padding-left: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.color_text_secondary};
`;


export const HeaderName = styled.h1`
`

export const HeaderInfo = styled.div`
`

export const BackIcon = styled(MdOutlineArrowBackIos)`
    height: 100%;
    font-size: 3.5em;
    color: ${(props) => props.theme.color_text_secondary};
    cursor: pointer;
`

export const CleanLink = styled(Link)`
  text-decoration: none;
`

export const FavoriteContainer = styled.div`
    background: ${(props) => props.theme.background};
    width: 100%;
    height: 100%;
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
    background: ${(props) => props.theme.secondary};
    width: 200px;
    height: 50px;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    color: white;
    border-radius: 5px;
    transition: all 500ms ease;
    &:hover {
        background: ${(props) => props.theme.primary};
        color: white;
    }
    @media screen and (max-width: 350px){
        width: 100%;
    }
`