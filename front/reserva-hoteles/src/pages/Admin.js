import React from 'react'
import PageContainer from '../components/PageContainer'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Administration from '../components/Administration'

const Admin = () => {
  return (
    <PageContainer>
        <Layout>
            <Section>
                <Administration/>
            </Section>
        </Layout>
    </PageContainer>
  )
}

export default Admin