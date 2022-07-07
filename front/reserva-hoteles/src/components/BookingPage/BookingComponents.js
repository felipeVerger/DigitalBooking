import styled from "styled-components";
import {Link} from "react-router-dom";
import {MdOutlineArrowBackIos} from "react-icons/md"


export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
`

export const HeaderBody = styled.div`
  background: ${(props) => props.theme.primary};
  width: 100%;
  max-width: 100vw;
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

export const HeaderCategory = styled.h2`

`

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

export const MainContentBody = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${props => props.theme.color_text_secondary};
`

export const MainContent = styled.div`
  width: 100vw;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;




`

export const Title = styled.h2`
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    padding: 3rem 0 0 3rem;
`
