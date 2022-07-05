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
  Button,
  ProductFiltered,
  FilteredImage
} from "./ProductsStyle";
import { useLocation } from "react-router-dom";

import { AiFillStar, AiFillHeart, AiOutlineStar } from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BiWifi } from "react-icons/bi";
import { FaSwimmingPool } from "react-icons/fa";

const RecomendationCard = ({id, img, category, title, location, description, puntuation}) => {
  const locationPath = useLocation().pathname;

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

  /**
   * It takes the array of stars and maps it to a new array of stars, where the star is incremented by
   * 1 if the scoreStars is greater than or equal to the index + 1.
   * @returns The map() method creates a new array with the results of calling a provided function on
   * every element in the calling array.
   */
  const createArrayStars = () => {
    return arrayStars.map((star, index) =>
      scoreStars >= index + 1 ? star + 1 : 0
    );
  };

  /**
   * When the user clicks the button, the page scrolls to the top.
   */
  const scrollTop = () => {
    let element = document.querySelector("main");
    element.scrollTop = 0;
  };

  // Favorites implementation


  return locationPath === '/' ? (
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
                  <AiFillStar key={index} />
                ) : (
                  <AiOutlineStar key={index} />
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
          <Description>{description}</Description>
          <Button onClick={scrollTop} to={`/product/${id}`}>
            Ver mas
          </Button>
        </DescriptionBlock>
      </RecomendationInfo>
    </Recommendation>
  ) : (
    <ProductFiltered>
      <ImageBlock>
        <FilteredImage src={img} alt="" />
      </ImageBlock>
      <RecomendationInfo>
        <HotelTopInfoBlock>
          <TitleBlock>
            <CategoryBlock>
              <Category>{category}</Category>
              {createArrayStars().map((star, index) =>
                star === 1 ? (
                  <AiFillStar key={index} />
                ) : (
                  <AiOutlineStar key={index} />
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
          <Description>{description}</Description>
          <Button onClick={scrollTop} to={`/product/${id}`}>
            Ver mas
          </Button>
        </DescriptionBlock>
      </RecomendationInfo>
    </ProductFiltered>
  )
};

export default RecomendationCard;
