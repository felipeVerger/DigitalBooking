import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../Products/ProductsCard';
import Loading from '../Loading/index';
import {
    HeaderBody,
    HeaderBlock,
    HeaderInfo,
    CleanLink,
    BackIcon,
    HeaderName,
    FavoriteContainer,
    BodyFavorite,
    ErrorBlock,
    ErrorMessage,
    ErrorButton
} from './FavoritesComponents';

const FavoriteProductList = () => {
  const URL_API = `${process.env.REACT_APP_URL_REMOTE}/products/findAll`;
  const URL_API_FAVORITES = `${process.env.REACT_APP_URL_REMOTE}/favs/findAll`;

  const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");

  const { data, loading, error } = useFetch(URL_API, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  })

  const { data: dataFavorites } = useFetch(URL_API_FAVORITES, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  })

  const filteredProducts = data && dataFavorites ? data.filter((product) => dataFavorites.map((favorite) => favorite.productId).includes(product.id)) : data;

  if (loading) {
    return <Loading/>
  } 
    return (
      <>
      <HeaderBody>
            <HeaderBlock>
                <HeaderInfo>
                    <HeaderName>Favoritos</HeaderName>
                </HeaderInfo>
            <CleanLink to={"/"}>
                <BackIcon />
            </CleanLink>
            </HeaderBlock>
        </HeaderBody>
    <FavoriteContainer>
        <BodyFavorite>
            {
                filteredProducts.length === 0 ? 
                  <ErrorBlock>
                    <ErrorMessage>No existen favoritos aun</ErrorMessage>
                    <ErrorButton to={'/'}>Volver</ErrorButton>
                  </ErrorBlock>
                :
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
        </BodyFavorite>
    </FavoriteContainer>
    </>
  )
}


export default FavoriteProductList;