import styled from "styled-components";

export const RecomendacionesContainer = styled.div`
  background: ${(props) => props.theme.content_background};
  width: 100vw;
  max-width: 1920px;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
    background: ${(props) => props.theme.content_background};
    @media screen and (max-width: 768px){
        background: ${(props) => props.theme.primary};
    }
`

export const Block = styled.div`
    padding: 1rem 3rem 1rem 4rem; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const RecomendationTitle = styled.h2`
    color: ${(props) => props.theme.primary};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 10px;
    @media screen and (max-width: 768px){
        color: white;
    }
`

export const RecommendationContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-flow: wrap;
`

export const Recomendation = styled.div`
    display: flex;
    flex: 1;
    background: white;
    border: 1px solid #DFE4EA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    width: 710px;
    min-height: 279px;

    @media screen and (max-width: 768px){
        flex: none;
        flex-direction: column;
        width: 100%;
        height: 491px;
    }
    @media screen and (max-width: 1321px){
        flex: none;
        width: 100%;
    }
`

export const ImageBlock = styled.div`
    position: relative;
    svg {
        position: absolute;
        right: 20px;
        top: 20px;
        color: white;
    }
`

export const Image = styled.img`
    width: 311.1px;
    height: 100%;
    border-radius: 8px;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 231px;
    }
`

export const RecomendationInfo = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    @media screen and (max-width: 768px){
        height: 100%;
    }
    @media screen and (max-width: 1321px) {
        gap: 20px;
    }
`

export const HotelTopInfoBlock = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`   

export const Category = styled.h5`
    font-family: 'Quicksand';
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: ${(props) => props.theme.primary};
    opacity: 0.5;
    text-transform: uppercase;
`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${(props) => props.theme.primary};
`

export const PunctuationBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
`

export const Punctuation = styled.span`
    background-color: ${(props) => props.theme.primary};
    width: 37px;
    height: 23px;
    text-align: center;
    border-radius: 7px;
    color: white;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
`

export const Opinion = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.primary};
    text-align: right;
`

export const LocationText = styled.p`
    font-family: 'Roboto', sans-serif;
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
`

export const DescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Description = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.primary};
    span {
        color: ${(props) => props.theme.secondary};
    }
`

export const Button = styled.button`
    background: ${(props) => props.theme.secondary};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    color: white;
    height: 40px;
`