import React, { useContext } from "react";

import {
  MobileMenuContainer,
  CloseIcon,
  MenuLinksContainer,
  MenuLink,
  MobileMenuHeader,
  MenuTitle,
} from "./MobileMenuComponents";
import { AiOutlineClose } from "react-icons/ai";
import { MenuContext } from "../../context/menu-context";
import { UserContext } from "../../context/user-context";
import Avatar from "react-avatar";

const MobileMenu = ({ isMenuOpen, toggle }) => {
  const { user, setUser } = useContext(UserContext);
  const { open, toggleOpen } = useContext(MenuContext);
  return (
    <MobileMenuContainer isMenuOpen={open} onClick={toggleOpen}>
      <MobileMenuHeader>
        <CloseIcon onClick={toggleOpen}>
          <AiOutlineClose />
        </CloseIcon>
        {user ? (
          <MenuTitle>
            <Avatar name={user.nombre} round size="60px" />
          </MenuTitle>
        ) : (
          <MenuTitle>MENÚ</MenuTitle>
        )}
      </MobileMenuHeader>

      <MenuLinksContainer>
        <MenuLink to={"/"}>Inicio</MenuLink>
        {user ? (
          <MenuLink to={"/"} onClick={() => setUser(null)}>
            Cerrar sesion
          </MenuLink>
        ) : (
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
