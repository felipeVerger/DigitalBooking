import React from "react";
import LoginForm from "../components/Form/LoginForm";
import Layout from "../components/Layout";
import Section from "../components/Section";
import PageContainer from "../components/PageContainer";

const Login = () => {
  return (
    <PageContainer>
      <Layout>
        <Section>
          <LoginForm />
        </Section>
      </Layout>
    </PageContainer>
  );
};

export default Login;
