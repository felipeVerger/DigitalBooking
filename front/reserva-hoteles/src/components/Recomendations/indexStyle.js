import styled from "styled-components";
import { Link } from "react-router-dom";

export const Body = styled.div`
  background: ${(props) => props.theme.content_background};
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    background: ${(props) => props.theme.primary};
  }
`;

export const Block = styled.div`
  max-width: 1920px;
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.primary};
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    color: white;
  }
`;

export const RecommendationContainer = styled.div`
  max-width: 1920px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ErrorMessage = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: lightgray;
  text-align: center;
`

export const Button = styled(Link)`
  width: 200px;
  height: 50px;
  text-align: center;
  margin-top: 15px;
  color: white;
  background: ${(props) => props.theme.secondary};
`