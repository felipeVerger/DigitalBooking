import React from "react";

import {
  MobileMenuContainer,
  CloseIcon,
  MenuLinksContainer,
  MenuLink,
} from "./MobileMenuComponents";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({isMenuOpen, toggle}) => {
  const loggedIn = false;
  return (
    <MobileMenuContainer isMenuOpen={isMenuOpen} onClick={toggle}>
      <CloseIcon onClick={toggle}>
        <AiOutlineClose />
      </CloseIcon>

      <MenuLinksContainer>
        <MenuLink to={"/"}>Home</MenuLink>
        {loggedIn ? null : (
          <>
            <MenuLink to={"/login"}>Login</MenuLink>{" "}
            <MenuLink to={"/register"}>Register</MenuLink>
          </>
        )}
      </MenuLinksContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
