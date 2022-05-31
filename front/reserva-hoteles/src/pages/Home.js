import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Recomendations from "../components/Recomendations";
import Section from "../components/Section";
import PageContainer from "../components/PageContainer";

const Home = () => {
  return (
    <PageContainer>
      <Layout>
        <Section>
          <Navbar />
          <Categories />
          <Recomendations />
        </Section>
      </Layout>
    </PageContainer>
  );
};

export default Home;
