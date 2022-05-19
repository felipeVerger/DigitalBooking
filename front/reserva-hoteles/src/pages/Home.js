import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { Section } from '../components/Section';

const Home = () => {
  return (
    <Layout>
      <Section>
        <Navbar/>
      </Section>

    </Layout>
    
  )
}

export default Home