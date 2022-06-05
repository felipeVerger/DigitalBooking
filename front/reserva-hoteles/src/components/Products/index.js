import React, {useState, useEffect} from 'react'
import {
    ProductsContainer,
    ProductsBody,
    Title,
    ProductsBlock,
    Product,
    Image,
    InfoBlock,
    TopInfo,
    CategoryBlock,
    Category,
    Name,
    PunctuationBlock,
    Punctuation,
    Opinion,
    Location,
    PriceBlock,
    TextPrice,
    Price
} from './ProductsComponents'
import { AiFillStar, AiFillHeart } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { BiWifi } from 'react-icons/bi'
import { FaSwimmingPool } from 'react-icons/fa'
import products from '../../staticData/products.json'


const Products = () => {
  
  return (
    <ProductsContainer>
        <ProductsBody>
            <Title>Lo mejor que podes encontrar en esta categoria</Title>
            <ProductsBlock>
                {
                    products.map((product) => (
                        <Product key={product.id}>
                            <Image src={product.crimg} alt="image"/>
                            <InfoBlock>
                                <TopInfo>
                                    <CategoryBlock>
                                        <Category>{product.category}</Category>
                                        <Name>{product.title}</Name>
                                        <Location> <HiLocationMarker/> {product.location}</Location>
                                    </CategoryBlock>
                                    <PunctuationBlock>
                                        <Punctuation>8</Punctuation>
                                        <Opinion>Muy bueno</Opinion>
                                    </PunctuationBlock>
                                </TopInfo>
                                <PriceBlock>
                                    <button>Ver mas</button>
                                    <TextPrice>Precio por noche</TextPrice>
                                    <Price>$ {product.price}</Price>
                                </PriceBlock>
                            </InfoBlock>
                        </Product>
                    ))
                }
            </ProductsBlock>
        </ProductsBody>
    </ProductsContainer>
  )
}

export default Products