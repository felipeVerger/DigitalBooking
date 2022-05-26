import React from 'react'
import categorias from '../../staticData/categorias.json'
import { Body, CategoryBlock, SectionTitle, FlexWrapper, Box, Image, InfoSection, CategoryText, CategoryInfo } from './CategoriasComponents'

const Categorias = () => {
  return (
    <Body>
        <CategoryBlock>
            <SectionTitle>Buscar por tipo de alojamiento</SectionTitle>
            <FlexWrapper>
                {
                    categorias.map((item, index) => {
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