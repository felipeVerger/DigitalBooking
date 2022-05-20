import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBody = styled.div`
  background: ${(props) => props.theme.background};
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 5vw;
  padding-left: 5vw;
`;

export const HeaderButton = styled.button`
  background-color: white;
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  height: 46px;
  width: 180px;
  font-weight: 700;
  &:hover{
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.color_text_secondary};
    cursor: pointer;

  }

  @media only screen and (max-width: 768px){
    display: none;
  }

  
`;

export const HeaderButtonContainer = styled.div`
  padding-left: 20px;
`;

export const Logo = styled.img`
  padding: 10px;
`;

export const LogoContainer = styled(Link)`
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
  text-decoration: none;
`;

export const Slogan = styled(Link)`
  color: ${(props) => props.theme.primary};
  padding: 20px;
  font-size: 24px;
  text-decoration: none;
  @media only screen and (max-width: 1100px){
    display: none;
    
  }

`;

export const ToggleMenu = styled.div`
display: none;
cursor: pointer;

@media screen and (max-width: 768px){
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  padding: 32px;
  color: ${props => props.theme.primary}

}

`
