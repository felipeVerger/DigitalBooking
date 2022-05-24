import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HeaderBlock,
  HeaderBody,
  HeaderButton,
  HeaderButtonContainer,
  HeaderContainer,
  Logo,
  LogoContainer,
  Slogan,
  ToggleMenu,
} from "./HeaderComponents";
import { FaBars } from "react-icons/fa";
import MobileMenu from "../MobileMenu";
import { MenuContext } from "../../context/menu-context";

const Header = () => {
  const signedIn = false;


  const location = useLocation().pathname;

  console.log(location);

  const {toggleOpen} = useContext(MenuContext);

  return (
    <HeaderContainer>

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
            {location != "/register" ? (
              <HeaderButtonContainer>
                <Link to={"/register"}>
                  {" "}
                  <HeaderButton>Crear cuenta</HeaderButton>
                </Link>
              </HeaderButtonContainer>
            ) : null}
            {location != "/login" ? (
              <HeaderButtonContainer>
                <Link to={"/login"}>
                  {" "}
                  <HeaderButton>Iniciar sesión</HeaderButton>
                </Link>
              </HeaderButtonContainer>
            ) : null}
          </HeaderBlock>
        )}
        <ToggleMenu onClick={toggleOpen}>
          <FaBars />
        </ToggleMenu>
      </HeaderBody>
    </HeaderContainer>
  );
};

export default Header;
