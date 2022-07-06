import styled from "styled-components";

export const Body = styled.div`
  background: white;
  max-width: 1920px;
  width: 100%;
`;

export const CategoryBlock = styled.div`
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1348px) {
    padding: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.primary};
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ErrorMessage = styled.h2`
  margin: 4rem;
`