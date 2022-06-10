import React, {useState, useEffect, useContext, Suspense} from 'react'
import {
    ProductsContainer,
    ProductsBody,
    Title,
    ProductsBlock,
    Product,
    TitleLink,
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
    Price,
    ErrorMessage
} from './ProductsComponents'
import { HiLocationMarker } from 'react-icons/hi'
import productsList from '../../staticData/products.json'
import {Link} from 'react-router-dom'
import { FilterContext } from '../../context/filter-context'


const Products = () => {
  const [products, setProducts] = useState([]);
  const {filter} = useContext(FilterContext);

  useEffect(() => {
    setProducts(productsList);
  }, [])

    
  /* Filtering the products based on the filter. */
  const filteredArray = products && filter[1] === 'category' ? products.filter((product) => product.category === filter[0]) 
    : products && filter[1] === 'city' ? products.filter((product) => product.location === filter[0]) : products;

  return filteredArray.length === 0 ? <ErrorMessage>No se encontraron resultados</ErrorMessage> : 
  (
    <ProductsContainer>
        <ProductsBody>
            <Title>Lo mejor que podes encontrar en esta categoria</Title>
            <ProductsBlock>
                {
                    filteredArray.map((product) => (
                        <Product key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <Image src={product.crimg} alt="image"/>
                            </Link>
                            <InfoBlock>
                                <TopInfo>
                                    <CategoryBlock>
                                        <Category>{product.category}</Category>
                                        <TitleLink to={`/product/${product.id}`}>
                                            <Name>{product.title}</Name>
                                        </TitleLink>
                                        <Location> <HiLocationMarker/> {product.location}</Location>
                                    </CategoryBlock>
                                    <PunctuationBlock>
                                        <Punctuation>{product.puntuation}</Punctuation>
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