import React from 'react'
import { LoadingContainer, LoadingBody, SpinnerComponent } from './LoadingStyle'

const Loading = () => {
  return (
    <LoadingContainer>
        <LoadingBody>
          <SpinnerComponent animation='border' variant='secondary' role='status'/>
        </LoadingBody>
    </LoadingContainer>
  )
}

export default Loading