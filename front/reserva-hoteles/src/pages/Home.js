import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Categorias from '../components/Categorias';
import { Section } from '../components/Section';

const Home = () => {
  return (
    <Layout>
      <Section>
        <Navbar/>
        <Categorias/>
      </Section>

    </Layout>
    
  )
}

export default Home