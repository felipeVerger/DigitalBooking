import React from 'react'
import LoginForm from '../components/Form/LoginForm'
import Layout from '../components/Layout'
import { Section } from '../components/Section'

const Login = () => {
  return (
    <Layout>
        <Section>
            <LoginForm />

        </Section>
    </Layout>
  )
}

export default Login