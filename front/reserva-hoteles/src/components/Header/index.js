import React from "react";
import { Link } from "react-router-dom";
import { HeaderBlock, HeaderBody, HeaderButton,HeaderButtonContainer, Logo, LogoContainer, Slogan} from "./HeaderComponents";

const Header = () => {
  const signedIn = false;
  return (
    <HeaderBody>
      <HeaderBlock>
        <LogoContainer>
          <Logo src={require(('../../assets/logo.png'))}/>
          
        </LogoContainer>
        <Slogan to={"/"}>Sentite como en tu hogar</Slogan>



      </HeaderBlock>
      {signedIn ? (
        <HeaderBlock></HeaderBlock>
      ) : (
        <HeaderBlock>
            <HeaderButtonContainer>
              <HeaderButton>Crear cuenta</HeaderButton>
            </HeaderButtonContainer>
            <HeaderButtonContainer>
              <HeaderButton>Iniciar sesión</HeaderButton>
            </HeaderButtonContainer>
        </HeaderBlock>
      )}
    </HeaderBody>
  );
};

export default Header;
