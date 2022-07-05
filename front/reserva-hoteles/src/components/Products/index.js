import React, {useContext, useEffect, useState} from 'react'
import { Body, Block, Title, RecommendationContainer, ErrorBlock, ErrorMessage, ErrorIcon } from './indexStyle'
import ProductCard from './ProductsCard'
import { FilterContext } from '../../context/filter-context'
import Loading from '../Loading';
import { fetchData, options } from '../../utils/fetchData';

const Recomendaciones = () => {
    const {filter} = useContext(FilterContext);
    const [products, setProducts] = useState([]);
    const [dataFavorites, setDataFavorites] = useState();

    console.log(filter);

  useEffect(() => {
    const fetchProductsData = async () => { 
      const productUrl = `${process.env.REACT_APP_URL_REMOTE}/products/findAll`;
      const productByCityUrl = `${process.env.REACT_APP_URL_REMOTE}/products/city/`;
      const productByCategoryUrl = `${process.env.REACT_APP_URL_REMOTE}/products/category/`;
      const productByCityAndDateUrl = `${process.env.REACT_APP_URL_REMOTE}/products/date/startDate/endDate/city`;

      if(filter && filter[1] === 'city'){
        let productsByCity = await fetchData(productByCityUrl + filter[0], options);
        setProducts(productsByCity);
      } else if (filter && filter[1] === 'category'){
        let productsByCategory = await fetchData(productByCategoryUrl + filter[0], options);
        setProducts(productsByCategory);
      } else {
        const productsData = await fetchData(productUrl, options);
        setProducts(productsData);
      }
    }
    fetchProductsData();
  }, [filter]) 


  // useEffect(() => {
  //   const fetchFavoritesData = async () => {
  //     const favoritesUrl = `${process.env.REACT_APP_URL_REMOTE}/favs/findAll`;

  //     if (sessionStorage.getItem('token')) {
  //       const favoriteProducts = await fetchData(favoritesUrl, options);
  //       setDataFavorites(favoriteProducts);
  //     }
  //   }
  //   fetchFavoritesData();
  // }, [])

    const randomProducts = products && products.length > 6 ? products.sort(() => Math.random() - 0.5).slice(0, 6) : products;
    // const filteredProducts = locationPath === '/productsList' ? products : randomProducts; 


  if (!randomProducts.length) {
    setTimeout(() => {
      return <Loading/>
    }, 5000)
  } else if (products.length === 0){
    return (
      <ErrorBlock>
        <ErrorIcon/>
        <ErrorMessage>Lo sentimos, no se encontraron resultados para tu busqueda</ErrorMessage>
      </ErrorBlock>
    )
  } else {
    return (
    <Body>
        <Block>
            <Title>Recomendaciones</Title>
            <RecommendationContainer>
                {
                   randomProducts.map((product) => {
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
                                // dataFavorites={dataFavorites}
                            />
                        )
                   })
                }
            </RecommendationContainer>
        </Block>
    </Body>
  );
}
}

export default Recomendaciones