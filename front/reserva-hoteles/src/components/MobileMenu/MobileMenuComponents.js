import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileMenuContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background};
  display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  align-items: center;
  top: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : "0")};
`;

export const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 32px;
  padding: 25px;
  color: ${(props) => props.theme.primary};
`;

export const MenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const MenuLink = styled(Link)`
height: 100px;
text-decoration: none;
font-size: 32px;
color: ${props => props.theme.primary};


&:hover{
    color: ${props => props.theme.color_text_primary};
}

`
