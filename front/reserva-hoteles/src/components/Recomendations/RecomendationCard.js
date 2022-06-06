import React from "react";
import {
    Recommendation,
    ImageBlock,
    Image, 
    RecomendationInfo, 
    HotelTopInfoBlock,
    TitleBlock, 
    CategoryBlock,
    Category, 
    Title, 
    PunctuationBlock, 
    Punctuation, 
    Opinion, 
    LocationText, 
    DescriptionBlock, 
    Description,
    Button
} from './RecomendationCardStyle'

import { AiFillStar, AiFillHeart, AiOutlineStar } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { BiWifi } from 'react-icons/bi'
import { FaSwimmingPool } from 'react-icons/fa'

const RecomendationCard = ({id, img, category, title, location, description, puntuation}) => {

  const score = Math.round(puntuation * 10) / 10;

  const puntuationToText = [
    "Sin votos",
    "Aceptable",
    "Aceptable",
    "Aceptable",
    "Aceptable",
    "Aceptable",
    "Aceptable",
    "Agradable",
    "Bien",
    "Muy bien",
    "Fantastico",
    "Excepcional",
  ];
  const textScore = puntuationToText[Math.round(score) + 1];

  const scoreStars = Math.floor(Math.round(score) / 2);

  let arrayStars = [0, 0, 0, 0, 0];

  const createArrayStars = () => {
    return arrayStars.map((star, index) =>
      scoreStars >= index + 1 ? star + 1 : 0
    );
  };

  return (
    <Recommendation>
      <ImageBlock>
        <Image src={img} alt="" />
        <AiFillHeart />
      </ImageBlock>
      <RecomendationInfo>
        <HotelTopInfoBlock>
          <TitleBlock>
            <CategoryBlock>
                <Category>{category}</Category>
                {createArrayStars().map((star, index) =>
                  star === 1 ? (
                    <AiFillStar key={index}/>
                  ) : (
                    <AiOutlineStar key={index}/>
                  )
                )}
            </CategoryBlock> 
            <Title>{title}</Title>
          </TitleBlock>
          <PunctuationBlock>
            <Punctuation>{score >= 0 ? score : "—"}</Punctuation>
            <Opinion>{textScore}</Opinion>
          </PunctuationBlock>
        </HotelTopInfoBlock>
        <div>
          <LocationText>
            {" "}
            <HiLocationMarker /> {location} <span>mostrar en el mapa</span>
          </LocationText>
          <BiWifi /> <FaSwimmingPool />
        </div>
        <DescriptionBlock>
          <Description>
            {description}
          </Description>
          <Button to={`/product/${id}`}>Ver mas</Button>
        </DescriptionBlock>
      </RecomendationInfo>
    </Recommendation>
  );
};

export default RecomendationCard;
