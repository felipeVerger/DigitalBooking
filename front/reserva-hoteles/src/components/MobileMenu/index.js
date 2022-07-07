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
  AdminButton
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

  const handleUserSession = () => {
    setUser(null);
    sessionStorage.removeItem("id");
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('lastName');
    sessionStorage.removeItem('role');
  }
  
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
        {user && user.role === 'ROLE_ADMIN' ? (
          <>
            <MenuLink to={"/administration"}>Administración</MenuLink>
            <MenuLink to={"/"} onClick={handleUserSession}>Cerrar sesión</MenuLink>
          </>
        ) : user && user.role === 'ROLE_USER' ? (
          <>
            <MenuLink to={"/favorites"}>Favoritos</MenuLink>
            <MenuLink to={`/${user.id}/bookings`}>Reservas</MenuLink>
            <MenuLink to={"/"} onClick={handleUserSession}>Cerrar sesión</MenuLink>
          </>
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
