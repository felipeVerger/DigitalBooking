import React, {useContext, useEffect, useState} from 'react'
import productsList from '../../staticData/products.json'
import { Body, Block, Title, RecommendationContainer, ErrorMessage } from './indexStyle'
import ProductCard from './ProductsCard'
import { FilterContext } from '../../context/filter-context'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';

const URL_API = 'http://localhost:8080/products/findAll'

const Recomendaciones = () => {
    // const [products, setProducts] = useState([]);
    const {filter} = useContext(FilterContext);
    const locationPath = useLocation().pathname;

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");

    const { data: products } = useFetch(URL_API, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    })

    /* Filtering the products based on the filter context. */
    const filteredArray = filter ? products && filter[1] === 'category' ? products.filter((product) => product.category.title === filter[0]) 
    : products && filter[1] === 'city' ? products.filter((product) => product.city.name + ', ' + product.city.country === filter[0]) : products : products;

    
    /* A ternary operator that checks if the products array has more than 6 elements, if it does, it
    sorts the array randomly and then slices the first 6 elements, if it doesn't, it returns the
    products array. */
    const randomProducts = products && products.length > 6 ? products.sort(() => Math.random() - 0.5).slice(0, 6) : products; 

  return filteredArray.length === 0 && locationPath === '/productsList' ? <ErrorMessage>No se encontraron resultados</ErrorMessage> : 
  (
    <Body>
        <Block>
            <Title>{locationPath === '/' ? 'Recomendaciones' : 'Buscaste: ' + filter[0]}</Title>
            <RecommendationContainer>
                {
                   filteredArray && locationPath === '/productsList' ? filteredArray.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                img={product.crimg}
                                category={product.category.title}
                                title={product.name}
                                location={product.address}
                                description={product.description}
                                puntuation={product.puntuation}
                                id={product.id}
                            />
                        )
                   }) : 
                     randomProducts.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                img={product.category.urlImage}
                                category={product.category.title}
                                title={product.name}
                                location={product.address}
                                description={product.description}
                                puntuation={product.puntuation}
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