import styled from "styled-components";

export const NavbarBody = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  max-width: 100vw;
  z-index: 997;
  height: 150px;
  @media screen and (max-width: 768px) {
    height: 237px;
    background-color: ${(props) => props.theme.secondary};
  }
  @media screen and (max-width: 728px) {
    height: 275px;
  }
  @media screen and (max-width: 417px) {
    height: 320px;
  }
`;

export const NavbarBlock = styled.div`
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 296px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => props.theme.secondary};
  font-size: 1rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-height: 45px;
    background-color: ${(props) => props.theme.primary};
  }
`;

