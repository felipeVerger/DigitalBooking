import React, {useState} from "react";
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
import MobileMenu from '../MobileMenu';

const Header = () => {
  const signedIn = false;

  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <MobileMenu isMenuOpen={isMenuOpen} toggle={toggleMenu} />
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
        <ToggleMenu onClick={toggleMenu}>
          <FaBars />
        </ToggleMenu>
      </HeaderBody>
    </>
  );
};

export default Header;
