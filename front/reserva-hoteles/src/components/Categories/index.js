import React, { useEffect, useState } from 'react'
import categoriesList from '../../staticData/data.json'
import { Body, CategoryBlock, SectionTitle, FlexWrapper} from './IndexStyle'
import CategoryCard from './CategoryCard'


const Categorias = () => {
    const [categories, setCatgeories] = useState([]);

    useEffect(() => {
        setCatgeories(categoriesList)
      }, [])

  return (
    <Body>
        <CategoryBlock>
            <SectionTitle>Buscar por tipo de alojamiento</SectionTitle>
            <FlexWrapper>
                {
                    categories.map((item) => {
                        return (
                            <CategoryCard
                                key={item.id}
                                img={item.image}
                                category={item.category}
                                amount={item.amount}
                                type={item.type}
                            />
                        )
                    })
                }
            </FlexWrapper>
        </CategoryBlock>
    </Body>
  )
}

export default Categorias