import styled from "styled-components";
import {MdOutlineArrowBackIos} from "react-icons/md"
import { Link } from "react-router-dom";

export const HeaderBody = styled.div`
  background: ${(props) => props.theme.primary};
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
`;

export const HeaderBlock = styled.div`
width: 100%;
  max-width: 1920px;
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.color_text_secondary};
  padding-left:  5%;
`;

export const HeaderCategory = styled.h2`

`

export const HeaderName = styled.h1`


`

export const HeaderInfo = styled.div`

`

export const BackIcon = styled(MdOutlineArrowBackIos)`
height: 100%;
font-size: 48px;
color: ${(props) => props.theme.color_text_secondary};
cursor: pointer;
`

export const CleanLink = styled(Link)`
  text-decoration: none;
`

export const DataBody = styled.div`
  background: ${(props) => props.theme.content_background};
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
`;


export const DataBlock = styled.div`
width: 100%;
  max-width: 1920px;
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.color_text_primary};
  padding-left:  5%;
`;