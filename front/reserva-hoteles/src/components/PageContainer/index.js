import React, { Children } from 'react'
import { Container } from './PageContainerStyle'

const PageContainer = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default PageContainer