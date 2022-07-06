import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileMenuContainer = styled.div`
  position: sticky;
  z-index: 999;
  min-width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.background};
  display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  align-items: center;
  top: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : "0")};
`;

export const MobileMenuHeader = styled.div`
background: ${props => props.theme.background};
max-height: 30vh;
border-bottom: 1px solid ${props => props.theme.primary};
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
`

export const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 32px;
  padding: 25px;
  color: ${(props) => props.theme.primary};
  grid-area: 1 / 1 / 2 / 2; 
`;

export const MenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


export const MenuLink = styled(Link)`
display: flex;
justify-content: end;
height: 80px;
text-decoration: none;
font-size: 24px;
color: ${props => props.theme.primary};
width: 100%;


&:hover{
    color: ${props => props.theme.color_text_primary};
}

`

export const MenuTitle = styled.div`
grid-area: 5 / 5 / 6 / 6; 
display: flex;
align-items: flex-end;
flex-direction: column;
color: ${props => props.theme.color_text_primary};
font-size: 36px;
padding: 10px;


`

export const Greeting = styled.div`

display: flex;
justify-content: flex-end;
font-size: 20px;
`

export const UserName = styled.div`
color: ${(props) => props.theme.primary};
font-size: 20px;
font-weight: 700;

`


export const UserIcon = styled.div`
padding-right: 1px;
`

export const AdminButton = styled(Link)`
  color: ${props => props.theme.primary};
  text-decoration: none;
  font-size: 20px;
  &:hover {
    color: ${props => props.theme.secondary};
    border-bottom: 3px solid ${props => props.theme.secondary};
  }
`