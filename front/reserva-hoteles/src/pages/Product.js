import React from 'react'
import Section from "../components/Section";
import PageContainer from "../components/PageContainer";
import Layout from "../components/Layout";
import ProductPage from '../components/ProductPage';


const Product = ({product}) => {

  const productoTemp = {
    category: "Hotel",
    name: "Hermitage Hotel",
  }

  return (
    <PageContainer>
    <Layout>
      <Section>
        <ProductPage product={productoTemp} />
      </Section>
      </Layout>
    </PageContainer>
  )
}

export default Product