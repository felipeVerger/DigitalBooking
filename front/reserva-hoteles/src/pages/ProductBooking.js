import React from 'react'
import PageContainer from '../components/PageContainer'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Booking from '../components/BookingPage'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading';

const ProductBooking = () => {

  const { id } = useParams(); 

  const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");

    console.log(id)
  const { data, loading, error } = useFetch('http://34.223.225.243:8080/products/' + id, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  })

  if(error){
    return(
    <PageContainer>
        <Layout>
            <Section><h1>A ocurrido un error.</h1> </Section>
            </Layout>
    </PageContainer>)
  }
  return (
    <PageContainer>
        <Layout>
            <Section>
              
            {loading ? <Loading/> : <Booking product={data}/> }
               
            </Section>
        </Layout>
    </PageContainer>
  )
}

export default ProductBooking