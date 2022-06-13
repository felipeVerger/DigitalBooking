import React, {useContext, useEffect, useState} from 'react'
import productsList from '../../staticData/products.json'
import { Body, Block, Title, RecommendationContainer, ErrorMessage, Button } from './indexStyle'
import RecomendationCard from './RecomendationCard'
import { FilterContext } from '../../context/filter-context'
import { useLocation } from 'react-router-dom'

const Recomendaciones = () => {
    const {filter} = useContext(FilterContext);
    const [products, setProducts] = useState([]);
    const locationPath = useLocation().pathname;

    useEffect(() => {
        setProducts(productsList);
    }, [])

    /* Filtering the products based on the filter context. */
    const filteredArray = filter ? products && filter[1] === 'category' ? products.filter((product) => product.category === filter[0]) 
    : products && filter[1] === 'city' ? products.filter((product) => product.location === filter[0]) : products : products;

  return filteredArray.length === 0 && locationPath === '/productsList' ? <ErrorMessage>No se encontraron resultados</ErrorMessage> : 
  (
    <Body>
        <Block>
            <Title>Recomendaciones</Title>
            <RecommendationContainer>
                {
                   filteredArray && locationPath === '/productsList' ? filteredArray.map((product) => {
                        return (
                            <RecomendationCard
                                key={product.id}
                                img={product.crimg}
                                category={product.category}
                                title={product.title}
                                location={product.location}
                                description={product.description}
                                puntuation={product.puntuation}
                                price={product.price}
                                id={product.id}
                            />
                        )
                   }) : 
                     products.map((product) => {
                        return (
                            <RecomendationCard
                                key={product.id}
                                img={product.crimg}
                                category={product.category}
                                title={product.title}
                                location={product.location}
                                description={product.description}
                                puntuation={product.puntuation}
                                price={product.price}
                                id={product.id}
                            />
                        )
                     })
                }
            </RecommendationContainer>
        </Block>
    </Body>
  );
}

export default Recomendaciones