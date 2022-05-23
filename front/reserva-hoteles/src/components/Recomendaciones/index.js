import React from 'react'
import recomendaciones from '../../staticData/recomendaciones.json'
import { 
    RecomendacionesContainer,
    Body,
    Block,
    RecomendationTitle,
    RecommendationContainer,
    Recomendation, 
    Image, 
    RecomendationInfoContainer, 
    RecomendationInfo, 
    HotelTopInfoBlock, 
    Category, 
    Title, 
    PunctuationBlock, 
    Punctuation, 
    Opinion, 
    LocationText, 
    DescriptionBlock, 
    Description, 
    Button } from './RecomendacionesComponents'

import { AiFillStar } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { BiWifi } from 'react-icons/bi'
import { FaSwimmingPool } from 'react-icons/fa'



const Recomendaciones = () => {
  return (
    <RecomendacionesContainer>
        <Body>
            <Block>
                <RecomendationTitle>Recomendaciones</RecomendationTitle>
                <RecommendationContainer>
                    {
                        recomendaciones.map((item) => {
                            return (
                                <Recomendation key={item.id}>
                                    <Image src={item.crimg} alt="" />
                                    <RecomendationInfoContainer>
                                        <RecomendationInfo>
                                            <HotelTopInfoBlock>
                                                <div>
                                                    <Category>{item.category}</Category>
                                                    <Title>{item.title}</Title>
                                                </div>
                                                <PunctuationBlock>
                                                    <Punctuation>8</Punctuation>
                                                    <Opinion>Muy bueno</Opinion>
                                                </PunctuationBlock>
                                            </HotelTopInfoBlock>
                                            <LocationText> <HiLocationMarker/> {item.location} <span>mostrar en el mapa</span></LocationText>
                                            <DescriptionBlock>
                                                <Description>{item.description} <span>mas...</span></Description>
                                                <Button>Ver mas</Button>
                                            </DescriptionBlock>
                                        </RecomendationInfo>
                                    </RecomendationInfoContainer>
                                </Recomendation>
                            )
                        })
                    }
                </RecommendationContainer>
            </Block>
        </Body>
    </RecomendacionesContainer>
  )
}

export default Recomendaciones