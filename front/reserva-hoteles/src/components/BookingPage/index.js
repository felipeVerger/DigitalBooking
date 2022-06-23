import React, {useState, useEffect} from 'react'
import {
    Container,
    HeaderBody,
    HeaderBlock,
    HeaderInfo,
    HeaderCategory,
    HeaderName,
    CleanLink,
    BackIcon,
    BookingBlock,
    BookingBlockInfo,
    MainContent,
    MainContentBody,
} from './BookingComponents'
import {
  ContentBlock,
  Separator,
  Policy,
  PolicyTitle,
  PolicyContent,
  PoliciesContainer,
  PolicyItem
} from "../ProductPage/ProductPageComponents";
import Form from './Form'

const Booking = ({product}) => {
  const {category = {} } = product;
  return (
    <Container>
        <HeaderBody>
        <HeaderBlock>
          <HeaderInfo>
            <HeaderCategory>{category.title}</HeaderCategory>
            <HeaderName>{product.name}</HeaderName>
          </HeaderInfo>
          <CleanLink to={"/product/" + product.id}>
            <BackIcon />
          </CleanLink>
        </HeaderBlock>
      </HeaderBody>
      <MainContentBody>
        <MainContent>
          <Form product={product}/>

      <Separator />
          <ContentBlock>
            <PoliciesContainer>
              <Policy>
                <PolicyTitle>Normas de la casa</PolicyTitle>
                <PolicyContent>
                  {product.houseRules.map((content) => {
                    return <PolicyItem>{content}</PolicyItem>;
                  })}
                </PolicyContent>
              </Policy>
              ;
              <Policy>
                <PolicyTitle>Salud y seguridad</PolicyTitle>
                <PolicyContent>
                  {product.healthAndHygiene.map((content) => {
                    return <PolicyItem>{content}</PolicyItem>;
                  })}
                </PolicyContent>
              </Policy>
              ;
              <Policy>
                <PolicyTitle>Politica de cancelacion</PolicyTitle>
                <PolicyContent>
                  {product.cancellationPolicy.map((content) => {
                    return <PolicyItem>{content}</PolicyItem>;
                  })}
                </PolicyContent>
              </Policy>
              ;
            </PoliciesContainer>
          </ContentBlock>
          </MainContent>
      </MainContentBody>
    </Container>
  )
}

export default Booking