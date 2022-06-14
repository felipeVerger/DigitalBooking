import React from 'react'
import PageContainer from '../components/PageContainer'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Message from '../components/SuccessfulMessagePage/index'

const SuccessfulMessage = () => {
  return (
    <PageContainer>
        <Layout>
            <Section>
                <Message/>
            </Section>
        </Layout>
    </PageContainer>
  )
}

export default SuccessfulMessage