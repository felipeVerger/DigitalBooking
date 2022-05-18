import styled from "styled-components";

export const FooterBody = styled.div`
  background: ${(props) => props.theme.primary};
  height: 60px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterBlock = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;


export const FooterText = styled.span`
font-weight: 700;
color: ${(props) => props.theme.color_text_secondary};
text-decoration: none;
`

export const FooterIcon = styled.div`
color: ${(props) => props.theme.color_text_secondary};
padding: 10px;
font-size: 24px;
align-items: center;
line-height: 0;

`

export const IconLink = styled.a`
text-decoration: none;
`

