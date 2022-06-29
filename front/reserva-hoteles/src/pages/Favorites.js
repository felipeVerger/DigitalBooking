import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import PageContainer from '../components/PageContainer';
import FavoriteProductList from '../components/Favorites';

const Favorites = () => {
  return (
    <PageContainer>
        <Layout>
            <Section>
                <FavoriteProductList/>
            </Section>
        </Layout>
    </PageContainer>
  )
}

export default Favorites