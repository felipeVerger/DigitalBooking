import React, {useContext} from 'react'
import {Box, Image, InfoSection, CategoryText, CategoryInfo} from './CategoryStyle'
import { FilterContext } from '../../context/filter-context'

const CategoryCard = ({ img, category, amount, type }) => {
  const { setFilter, filter } = useContext(FilterContext);

  return (
    <Box onClick={() => setFilter({category: [category, 'category']}) }>
        <Image src={img} alt="imagen-categorias" />
        <InfoSection>
            <CategoryText>{category}</CategoryText>
            <CategoryInfo>{amount} {type}</CategoryInfo>
        </InfoSection>
    </Box>
  )
}

export default CategoryCard