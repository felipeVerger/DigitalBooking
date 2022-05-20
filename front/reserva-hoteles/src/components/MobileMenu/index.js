import React from "react";

import { MobileMenuContainer, CloseIcon } from "./MobileMenuComponents";
import { ImCross } from "react-icons/im";

const MobileMenu = () => {
  return (
    <MobileMenuContainer>
      <CloseIcon>
        <ImCross />
      </CloseIcon>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
