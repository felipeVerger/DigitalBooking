import styled from "styled-components";

export const FooterContainer = styled.div`
  background: ${(props) => props.theme.primary};
  width: 100vw;

  height: 60px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px){
    background: ${(props) => props.theme.secondary};
  }
`;

export const FooterBody = styled.div`
  max-width: 1920px;

  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterBlock = styled.div`
  padding: 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FooterText = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.color_text_secondary};
  text-decoration: none;
  @media screen and (max-width: 440px) {
    font-size: 0.6rem;
  }
`;

export const FooterIcon = styled.div`
  color: ${(props) => props.theme.color_text_secondary};
  padding: 10px;
  font-size: 24px;
  align-items: center;
  line-height: 0;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 440px) {
    font-size: 1rem;
  }
`;

export const IconLink = styled.a`
  text-decoration: none;
`;
