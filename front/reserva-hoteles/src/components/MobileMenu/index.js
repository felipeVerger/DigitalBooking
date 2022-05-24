import React, {useContext} from "react";

import {
  MobileMenuContainer,
  CloseIcon,
  MenuLinksContainer,
  MenuLink,
  MobileMenuHeader,
  MenuTitle
} from "./MobileMenuComponents";
import { AiOutlineClose } from "react-icons/ai";
import { MenuContext } from "../../context/menu-context";

const MobileMenu = ({isMenuOpen, toggle}) => {
  const loggedIn = false;
  const {open, toggleOpen} = useContext(MenuContext);
  return (
    <MobileMenuContainer isMenuOpen={open} onClick={toggleOpen}>
      <MobileMenuHeader>
        <CloseIcon onClick={toggleOpen}>
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
