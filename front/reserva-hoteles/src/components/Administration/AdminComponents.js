import styled from "styled-components";
import { Link } from 'react-router-dom';
import {MdOutlineArrowBackIos} from "react-icons/md"

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

export const FormBackground = styled.div`
    background: ${props => props.theme.content_background};
    height: 100%;
`
export const FormBody = styled.div`
    padding: 2rem 2.5rem 6rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
`

export const NavigationButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`

export const NavButton = styled.button`
  color: ${props => props.theme.background};
  background-color: ${props => props.theme.primary};
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  &:focus {
    background-color: ${props => props.theme.secondary};
  }
`

export const Title = styled.h2`
    color: ${(props) => props.theme.primary};
`

export const FormContainer = styled.div`
    margin-top: 1rem;
    background: white;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
` 

