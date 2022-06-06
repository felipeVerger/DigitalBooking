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
import { HiLocationMarker } from 'react-icons/hi'
import productsList from '../../staticData/products.json'


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsList);
    }, [])

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