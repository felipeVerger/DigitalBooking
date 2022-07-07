import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiError } from 'react-icons/bi';

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
  width: 100%;
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

export const ErrorBlock =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7rem;
`

export const ErrorMessage = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: black;
  text-align: center;
`

export const ErrorIcon = styled(BiError)`
  font-size: 50px;
  color: red;
`

export const Button = styled(Link)`
  width: 200px;
  height: 50px;
  text-align: center;
  margin-top: 15px;
  color: white;
  background: ${(props) => props.theme.secondary};
`
