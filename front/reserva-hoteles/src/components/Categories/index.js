import React, {useContext, useEffect, useState} from 'react'
import categories from '../../staticData/data.json'
import { Body, CategoryBlock, SectionTitle, FlexWrapper, Box, Image, InfoSection, CategoryText, CategoryInfo } from './CategoriesComponents'

const Categorias = () => {

  return (
    <Body>
        <CategoryBlock>
            <SectionTitle>Buscar por tipo de alojamiento</SectionTitle>
            <FlexWrapper>
                {
                    categories.map((item) => {
                        return (
                            <Box key={item.id}>
                                <Image src={item.image} alt="imagen-categorias" />
                                <InfoSection>
                                    <CategoryText>{item.category}</CategoryText>
                                    <CategoryInfo>{item.amount} {item.type}</CategoryInfo>
                                </InfoSection>
                            </Box>
                        )
                    })
                }
            </FlexWrapper>
        </CategoryBlock>
    </Body>
  )
}

export default Categorias