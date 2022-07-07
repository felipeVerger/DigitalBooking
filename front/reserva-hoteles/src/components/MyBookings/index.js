import React from 'react'
import {
    HeaderBody,
    HeaderBlock,
    HeaderInfo,
    CleanLink,
    BackIcon,
    HeaderName,
    ProductContainer,
    ErrorBlock,
    ErrorMessage,
    ErrorIcon,
} from './BookingComponents';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../Products/ProductsCard';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/index';

const MyBooking = () => {
  const { userId } = useParams();
  const URL_API_PRODUCTS = `${process.env.REACT_APP_URL_REMOTE}/products/findAll`;
  // const URL_API_BOOKINGS = `${process.env.REACT_APP_URL_REMOTE}/reservations/user/${userId}`;

  const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");

  const { data, loading } = useFetch(URL_API_PRODUCTS, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  });
  // const { data: bookings } = useFetch(URL_API_BOOKINGS, {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // });


  // filter products that are reserved
  // const filteredProducts =
  //   data && bookings
  //     ? data.filter((product) =>
  //         bookings.map((booking) => booking.product.includes(product.id))
  //       )
  //     : data;

  const filteredProducts =
  data &&  data.filter((product) =>
        product.id === 26
      );

  if (loading) {
    return <Loading/>
  }
  return (
    <>
        <HeaderBody>
            <HeaderBlock>
                <HeaderInfo>
                    <HeaderName>Mis reservas</HeaderName>
                </HeaderInfo>
            <CleanLink to={"/"}>
                <BackIcon />
            </CleanLink>
            </HeaderBlock>
        </HeaderBody>
        <ProductContainer>
            {
                filteredProducts.length === 0 ? 
                    <ErrorBlock>
                        <ErrorIcon/>
                        <ErrorMessage>Aun nos has efectuado ninguna reserva</ErrorMessage>
                    </ErrorBlock>
                :
                filteredProducts.map((product) => {
                    return (
                      <ProductCard
                        key={product.id}
                        img={
                          product.images && product.images[0]
                            ? product.images[0].url
                            : ""
                        }
                        category={product.category.title}
                        title={product.name}
                        location={product.address}
                        description={product.description}
                        puntuation={product.score}
                        id={product.id}
                      />
                    );
                })
            }
        </ProductContainer>
    </>
  )
}

export default MyBooking;