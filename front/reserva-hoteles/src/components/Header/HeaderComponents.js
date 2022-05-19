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
  padding: 50px;
`;

export const HeaderButton = styled.button`
  background-color: white;
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  height: 46px;
  width: 180px;
  font-weight: 700;
`;

export const HeaderButtonContainer = styled.div`
  padding: 30px;
`;

export const Logo = styled.img`
  padding: 10px;
`;

export const LogoContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
`;

export const Slogan = styled(Link)`
  color: ${(props) => props.theme.primary};
  padding: 20px;
  font-size: 24px;
  text-decoration: none;

`;

export const ToggleMenu = styled.div`
display: none;

@media screen and (max-width: 768px){
  display: block;
  width: 48px;
  color: ${props => props.theme.primary}

}

`
