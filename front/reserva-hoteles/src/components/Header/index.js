import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderBlock,
  HeaderBody,
  HeaderButton,
  HeaderButtonContainer,
  Logo,
  LogoContainer,
  Slogan,
  ToggleMenu,
} from "./HeaderComponents";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const signedIn = false;
  return (
    <HeaderBody>
      <HeaderBlock>
        <LogoContainer to={"/"}>
          <Logo src={require("../../assets/logo.png")} />
        </LogoContainer>
        <Slogan to={"/"}>Sentite como en tu hogar</Slogan>
      </HeaderBlock>
      {signedIn ? (
        <HeaderBlock></HeaderBlock>
      ) : (
        <HeaderBlock>
          <HeaderButtonContainer>
            <Link to={"/register"}>
              {" "}
              <HeaderButton>Crear cuenta</HeaderButton>
            </Link>
          </HeaderButtonContainer>
          <HeaderButtonContainer>
            <Link to={"/login"}>
              {" "}
              <HeaderButton>Iniciar sesión</HeaderButton>
            </Link>
          </HeaderButtonContainer>
        </HeaderBlock>
      )}
      <ToggleMenu>
        <FaBars />
      </ToggleMenu>
    </HeaderBody>
  );
};

export default Header;
