import React, {useContext, useEffect, useState} from 'react'
import { Body, Block, Title, RecommendationContainer, ErrorBlock, ErrorMessage, ErrorIcon } from './indexStyle'
import ProductCard from './ProductsCard'
import { FilterContext } from '../../context/filter-context'
import Loading from '../Loading';
import { fetchData, options } from '../../utils/fetchData';

const Recomendaciones = () => {
    const {filter, setFilter} = useContext(FilterContext);
    const [products, setProducts] = useState([]);
    // const [dataFavorites, setDataFavorites] = useState();

    console.log(filter);

  useEffect(() => {
    const fetchProductsData = async () => {
      const productUrl = `${process.env.REACT_APP_URL_REMOTE}/products/findAll`;
      const productByCityUrl = `${process.env.REACT_APP_URL_REMOTE}/products/city/`;
      const productByCategoryUrl = `${process.env.REACT_APP_URL_REMOTE}/products/category/`;
      // const productByCategoryAndCity = `${process.env.REACT_APP_URL_REMOTE}/products/`;
      const productByCityAndDateUrl = `${process.env.REACT_APP_URL_REMOTE}/products/date/`;

      if (filter) {
        if (filter.city && filter.city[1] === "city") {
          let productsByCity = await fetchData(productByCityUrl + filter.city[0], options);
          setProducts(productsByCity);
        } else if (filter.category && filter.category[1] === "category") {
          let productsByCategory = await fetchData(productByCategoryUrl + filter.category[0], options);
          setProducts(productsByCategory);
        } else if (filter.date && filter.date[1] === "date" && filter.city && filter.city[1] === "city") {
          let productsByCityAndDate = await fetchData(productByCityAndDateUrl + filter.date[0].startDate + "/" + filter.date[0].endDate + "/" + filter.city[0], options);
          setProducts(productsByCityAndDate);
        } else {
          const productsData = await fetchData(productUrl, options);
          setProducts(productsData);
        }
      }
    };
    fetchProductsData();
  }, [filter]); 


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

    console.log(products);

  if (!randomProducts.length) {
    return <Loading/>
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