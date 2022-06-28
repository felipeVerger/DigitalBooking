import React, {useContext, useEffect, useState} from 'react'
import { Body, Block, Title, RecommendationContainer, ErrorMessage } from './indexStyle'
import ProductCard from './ProductsCard'
import { FilterContext } from '../../context/filter-context'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';
import { fetchData, options } from '../../utils/fetchData';

const Recomendaciones = () => {
    const {filter} = useContext(FilterContext);
    const locationPath = useLocation().pathname;

    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => { 
      const productUrl = `${process.env.REACT_APP_URL_REMOTE}/products/findAll`;
      const productByCityUrl = `${process.env.REACT_APP_URL_REMOTE}/products/city/`;
      const productByCategoryUrl = `${process.env.REACT_APP_URL_REMOTE}/products/category/`;
      const productByCityAndDateUrl = `${process.env.REACT_APP_URL_REMOTE}/products/date/`;

      if(filter && filter[1] === 'city' && locationPath === '/productsList'){
        let productsByCity = await fetchData(productByCityUrl + filter[0], options);
        setProducts(productsByCity);
      } else if (filter && filter[1] === 'category' && locationPath === '/productsList'){
        let productsByCategory = await fetchData(productByCategoryUrl + filter[0], options);
        setProducts(productsByCategory);
      } else {
        const productsData = await fetchData(productUrl, options);
        setProducts(productsData);
      }
    }
    fetchProductsData();
  }, []) 


    const randomProducts = products && products.length > 6 ? products.sort(() => Math.random() - 0.5).slice(0, 6) : products;
    const filteredProducts = locationPath === '/productsList' ? products : randomProducts; 

  if (!filteredProducts.length) {
    return <Loading/>
  }
  return !filter && locationPath === '/productsList' ? <ErrorMessage>No se encontraron resultados</ErrorMessage> : 
  (
    <Body>
        <Block>
            <Title>{locationPath === '/' ? 'Recomendaciones' : `${filter[0]}: ${randomProducts.length} alojamientos encontrados`}</Title>
            <RecommendationContainer>
                {
                   filteredProducts.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                img={product.images && product.images[0] ? product.images[0].url : ""}
                                category={product.category.title}
                                title={product.name}
                                location={product.address}
                                description={product.description}
                                puntuation={product.score}
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