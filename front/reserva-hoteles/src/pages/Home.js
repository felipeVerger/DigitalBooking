import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Categorias from "../components/Categorias";
import Recomendaciones from "../components/Recomendaciones";
import { Section } from "../components/Section";
import PageContainer from "../components/PageContainer";

const Home = () => {
  return (
    <PageContainer>
      <Layout>
        <Section>
          <Navbar />
          <Categorias />
          <Recomendaciones />
        </Section>
      </Layout>
    </PageContainer>
  );
};

export default Home;
