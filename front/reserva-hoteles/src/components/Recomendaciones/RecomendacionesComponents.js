import styled from "styled-components";

export const RecomendacionesContainer = styled.div`
  background: ${(props) => props.theme.content_background};
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  max-width: 1920px;
`;

export const Block = styled.div`
  padding: 1rem 2rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`;

export const RecomendationTitle = styled.h2`
  color: ${(props) => props.theme.primary};
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const RecommendationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const Recomendation = styled.div`
  display: flex;

  height: 279px;
  background: #ffffff;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 344.11px;
  height: 100%;
  border-radius: 8px;
`;

export const RecomendationInfoContainer = styled.section`
  padding: 1rem;
`;

export const RecomendationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const HotelTopInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.h5`
  color: gray;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`;

export const Title = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.primary};
`;

export const PunctuationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

export const Punctuation = styled.span`
  background-color: ${(props) => props.theme.primary};
  color: white;
  width: 34px;
  height: 27px;
  text-align: center;
  border-radius: 10px;
`;

export const Opinion = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.primary};
`;

export const LocationText = styled.p`
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.primary};

  svg {
    color: ${(props) => props.theme.secondary};
  }

  span {
    color: ${(props) => props.theme.secondary};
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
`;

export const DescriptionBlock = styled.div`
  margin-top: 15px;
`;

export const Description = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.primary};

  span {
    color: ${(props) => props.theme.secondary};
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;

  width: 331px;
  height: 40px;
  margin-top: 10px;

  cursor: pointer;
`;
