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
  AvatarIcon,
  UserInfo,
  Greeting,
  UserName
} from "./HeaderComponents";
import { FaBars } from "react-icons/fa";
import MobileMenu from "../MobileMenu";
import { MenuContext } from "../../context/menu-context";
import { UserContext} from "../../context/user-context";
import { AiOutlineClose } from "react-icons/ai";
import {themes} from "../../assets/themes";

const Header = () => {
  const signedIn = false;

  const location = useLocation().pathname;

  const { toggleOpen } = useContext(MenuContext);

  const {user, setUser} = useContext(UserContext);


  const handleUserSession = () => {
    setUser(null);
    sessionStorage.removeItem('token');
  }

  return (
    <HeaderContainer>
      <HeaderBody>
        <HeaderBlock>
          <LogoContainer to={"/"}>
            <Logo src={require("../../assets/logo.png")} />
          </LogoContainer>
          <Slogan to={"/"}>Sentite como en tu hogar</Slogan>
        </HeaderBlock>
        {user ? (
          <HeaderBlock>
            <AvatarIcon name={user.nombre} round size="40px" color={themes.light.primary} />
                  {/* <HeaderButton onClick={() => {setUser(null)}}>Cerrar sesion</HeaderButton> */}
                  <UserInfo>
                  <Greeting>Hola, <AiOutlineClose style={{cursor: "pointer"}} onClick={handleUserSession}/></Greeting>
                  <UserName>{user.nombre}</UserName>
                  </UserInfo>


          </HeaderBlock>
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
