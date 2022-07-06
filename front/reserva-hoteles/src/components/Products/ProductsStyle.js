import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Recommendation = styled.div`
  display: flex;
  
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  min-height: 279px;
  width: 49.5%;
  margin-bottom: 40px;
  
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1007px) {
    width: 100%;
  }
`;

export const ImageBlock = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 20px;
    top: 20px;
    color: white;
  }
`;

export const Image = styled.img`
  width: 311.1px;
  height: 300px;
  max-height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 280px;
  }
`;

export const RecomendationInfo = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 640px) {
    height: 100%;
  }
  @media screen and (max-width: 1321px) {
    gap: 20px;
  }
`;

export const HotelTopInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  
  gap: 10px;
`;

export const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const CategoryBlock = styled.div`
    display: flex;
    svg {
        color: ${(props) => props.theme.primary};
        opacity: 0.8;
    }
`

export const Category = styled.h5`
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.primary};
  opacity: 0.5;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.primary};
`;

export const PunctuationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

export const Punctuation = styled.span`
  background-color: ${(props) => props.theme.primary};
  width: 30px;
  height: 23px;
  text-align: center;
  border-radius: 7px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
`;

export const Opinion = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.primary};
  text-align: right;
`;

export const LocationText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.primary};
  svg {
    color: ${(props) => props.theme.secondary};
  }
  span {
    text-transform: uppercase;
    color: ${(props) => props.theme.secondary};
  }
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.primary};
  span {
    color: ${(props) => props.theme.secondary};
  }
`;

export const Button = styled(Link)`
    background: ${(props) => props.theme.secondary};
    text-align: center;
    padding: 0.5rem;
    text-decoration: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    color: white;
    height: 40px;
    cursor: pointer;
    transition: all 500ms ease;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

 
export const ProductFiltered = styled.div`
  display: flex;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  width: 100%;
  min-height: 300px;
  /* max-height: 300px; */
  margin-bottom: 40px;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1007px) {
    width: 100%;
  }
`

export const FilteredImage = styled.img`
  width: 400px;
  height: 100%;
  max-height: 300px;
  border-radius: 8px;
  @media screen and (max-width: 640px) {
    width: 100%;
    height: 231px;
  }
`