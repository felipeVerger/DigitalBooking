import React, { useEffect, useState } from 'react'
import PageContainer from '../components/PageContainer'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Products from '../components/Products'
import Navbar from '../components/Navbar'

const ProductsList = () => {

  return (
    <PageContainer>
        <Layout>
            <Section>
                <Navbar/>
                <Products/>
            </Section>
        </Layout>
    </PageContainer>
  )
}

export default ProductsList