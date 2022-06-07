import React from 'react'
import PageContainer from '../components/PageContainer'
import Layout from '../components/Layout'
import Section from '../components/Section'
import ErrorPage from '../components/ErrorPage'

const Error = () => {
  return (
    <PageContainer>
        <Layout>
            <Section>
                <ErrorPage/>
            </Section>
        </Layout>
    </PageContainer>
  )
}

export default Error