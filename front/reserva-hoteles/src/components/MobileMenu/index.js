import React from "react";

import {
  MobileMenuContainer,
  CloseIcon,
  MenuLinksContainer,
  MenuLink,
  MobileMenuHeader,
  MenuTitle
} from "./MobileMenuComponents";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({isMenuOpen, toggle}) => {
  const loggedIn = false;
  return (
    <MobileMenuContainer isMenuOpen={isMenuOpen} onClick={toggle}>
      <MobileMenuHeader>
        <CloseIcon onClick={toggle}>
          <AiOutlineClose />
        </CloseIcon>

        <MenuTitle>MENÚ</MenuTitle>
      </MobileMenuHeader>

      <MenuLinksContainer>
        <MenuLink to={"/"}>Inicio</MenuLink>
        {loggedIn ? null : (
          <>
            <MenuLink to={"/login"}>Login</MenuLink>{" "}
            <MenuLink to={"/register"}>Crear cuenta</MenuLink>
          </>
        )}
      </MenuLinksContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
