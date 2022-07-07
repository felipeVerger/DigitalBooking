import React from 'react'
import PageContainer from '../components/PageContainer';
import Layout from '../components/Layout';
import Section from '../components/Section';
import MyBooking from '../components/MyBookings';

const MyBookings = () => {
  return (
    <PageContainer>
        <Layout>
            <Section>
                <MyBooking/>
            </Section>
        </Layout>
    </PageContainer>
  )
}

export default MyBookings