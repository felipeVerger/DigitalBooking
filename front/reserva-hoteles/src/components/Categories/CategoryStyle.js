import styled from "styled-components";

export const Box = styled.div`
  min-width: 20%;
  background: #ffffff;
  border: 1px solid #f3f1ed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  flex: 1;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const InfoSection = styled.section`
  padding: 5px;
`;

export const CategoryText = styled.h4`
  font-size: 17px;
  font-weight: 700;
  line-height: 23px;
  color: ${(props) => props.theme.primary};
`;

export const CategoryInfo = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.primary};
  opacity: 0.6;
`;

export const Image = styled.img`
  min-width: 100%;
  max-width: 100%;
  border-radius: 10px 10px 0px 0px;
  /* @media screen and (max-width: 768px) {
        width: 100%;
        height: 300px;
    } */
`;
