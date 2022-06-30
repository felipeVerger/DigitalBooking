import React, {useContext} from 'react'
import {Box, Image, InfoSection, CategoryText, CategoryInfo} from './CategoryStyle'
import { FilterContext } from '../../context/filter-context'
import {Link} from 'react-router-dom'

const CategoryCard = ({ img, category, amount, type }) => {

  const { setFilter } = useContext(FilterContext);

  return (
    <Box onClick={() => setFilter([category, 'category'])}>
        <Image src={img} alt="imagen-categorias" />
        <InfoSection>
            <CategoryText>{category}</CategoryText>
            <CategoryInfo>{amount} {type}</CategoryInfo>
        </InfoSection>
    </Box>
  )
}

export default CategoryCard