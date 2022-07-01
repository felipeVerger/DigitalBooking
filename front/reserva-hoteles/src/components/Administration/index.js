import React from 'react'
import {
    HeaderBody,
    HeaderBlock,
    HeaderInfo,
    CleanLink,
    BackIcon,
    HeaderName,
    FormBackground,
    FormBody,
    Title,
    FormContainer,
} from './AdminComponents'
import FormComponent from './Form'


const Administration = () => {
  return (
    <div>
        <HeaderBody>
        <HeaderBlock>
          <HeaderInfo>
            <HeaderName>Administrácion</HeaderName>
          </HeaderInfo>
          <CleanLink to={"/"}>
            <BackIcon />
          </CleanLink>
        </HeaderBlock>
      </HeaderBody>
      <FormBackground>
        <FormBody>
            <Title>Crear propiedad</Title>
            <FormContainer>
                <FormComponent/>
            </FormContainer>
        </FormBody>
      </FormBackground>
    </div>
  )
}

export default Administration;