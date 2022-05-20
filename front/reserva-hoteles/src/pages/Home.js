import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Categorias from '../components/Categorias';
import Recomendaciones from '../components/Recomendaciones';
import { Section } from '../components/Section';

const Home = () => {
  return (
    <Layout>
      <Section>
        <Navbar/>
        <Categorias/>
        <Recomendaciones/>
      </Section>

    </Layout>
    
  )
}

export default Home