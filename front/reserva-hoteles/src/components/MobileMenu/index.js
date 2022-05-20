<<<<<<< Updated upstream
import React from 'react'
=======
import React from "react";

import {
  MobileMenuContainer,
  CloseIcon,
  MenuLinksContainer,
  MenuLink,
} from "./MobileMenuComponents";
import { AiOutlineClose } from "react-icons/ai";
>>>>>>> Stashed changes

const MobileMenu = ({isMenuOpen, toggle}) => {
  const loggedIn = false;
  return (
<<<<<<< Updated upstream
    <div>MobileMenu</div>
  )
}
=======
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
>>>>>>> Stashed changes

export default MobileMenu