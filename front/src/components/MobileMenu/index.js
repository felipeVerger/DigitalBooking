import React, { useContext } from "react";

import {
  MobileMenuContainer,
  CloseIcon,
  MenuLinksContainer,
  MenuLink,
  MobileMenuHeader,
  MenuTitle,
  Greeting,
  UserName,
  UserIcon,
} from "./MobileMenuComponents";
import { AiOutlineClose } from "react-icons/ai";
import { MenuContext } from "../../context/menu-context";
import { UserContext } from "../../context/user-context";
import Avatar from "react-avatar";
import { themes } from "../../assets/themes";
import { useLocation } from "react-router-dom";

const MobileMenu = ({ isMenuOpen, toggle }) => {
  const { user, setUser } = useContext(UserContext);
  const { open, toggleOpen } = useContext(MenuContext);
  const location = useLocation().pathname;
  return (
    <MobileMenuContainer isMenuOpen={open} onClick={toggleOpen}>
      <MobileMenuHeader>
        <CloseIcon onClick={toggleOpen}>
          <AiOutlineClose />
        </CloseIcon>
        {user ? (
          <MenuTitle>
            <UserIcon>
              <Avatar
                name={user.nombre}
                round
                size="40px"
                color={themes.light.primary}
              />
            </UserIcon>
            <Greeting>Hola,</Greeting>
            <UserName>{user.nombre.split(" ")[0]}</UserName>
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
            {location != "/login" ? (
              <MenuLink to={"/login"}>Login</MenuLink>
            ) : (
              null
            )}
            {location != "/register" ? (
              <MenuLink to={"/register"}>Crear cuenta</MenuLink>
            ) : (
              null
            )}
          </>
        )}
      </MenuLinksContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
