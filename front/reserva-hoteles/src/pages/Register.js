import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import PageContainer from "../components/PageContainer";
import RegisterForm from "../components/Form/RegisterForm";

const Register = () => {
  return (
    <PageContainer>
      <Layout>
        <Section>
            <RegisterForm />
        </Section>
      </Layout>
    </PageContainer>
  );
};

export default Register;
