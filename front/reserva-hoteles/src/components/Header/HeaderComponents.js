import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.background};
  width: 100vw;
  display: unset;
  height: 100px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index:998;
`;

export const HeaderBody = styled.div`
  max-width: 1920px;
  width: 100%;

  
  
  display: flex;
  justify-content: space-between;
  overflow: clip;
`;

export const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 5%;
  padding-left: 5%;
`;

export const HeaderButton = styled.button`
  background-color: white;
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  height: 46px;
  width: 180px;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.color_text_secondary};
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
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
  padding-left: 20px;
  font-size: 24px;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const ToggleMenu = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    padding: 32px;
    color: ${(props) => props.theme.primary};
  }
`;

export const AvatarIcon = styled(Avatar)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  
  height: 46px;
  width: 180px;
  padding-left: 20px;

  align-items: space-between;
  justify-content: center;
  flex-direction: column;
  display: flex;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Greeting = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const UserName = styled.div`
color: ${(props) => props.theme.primary};
font-weight: 700;
width: 100vw;
`

export const AdminBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
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

export const Separator = styled.div`
  border-left: 3px solid ${(props) => props.theme.secondary};
  height: 60px;
  opacity: 0.8;
`