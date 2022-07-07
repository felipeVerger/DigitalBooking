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
    Title
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



const Booking = ({product, productDetail}) => {
  // const {category = {} } = product;
  const {id, name, city = {}, category = {} , healthHygiene, houseRules, cancellationPolicy} = productDetail;

  return (
    <Container>
        <HeaderBody>
        <HeaderBlock>
          <HeaderInfo>
            <HeaderCategory>{category.title}</HeaderCategory>
            <HeaderName>{name}</HeaderName>
          </HeaderInfo>
          <CleanLink to={"/product/" + id}>
            <BackIcon />
          </CleanLink>
        </HeaderBlock>
      </HeaderBody>
      <MainContentBody>
        <MainContent>
          <Form product={productDetail}/>
      <Title>Que tenes que saber</Title>
      <Separator />
          <ContentBlock>
            <PoliciesContainer>
              <Policy>
                <PolicyTitle>Normas de la casa</PolicyTitle>
                <PolicyContent>
                  {houseRules && houseRules.map((content) => {
                    console.log(content);
                    return <PolicyItem>{content.description}</PolicyItem>;
                  })}
                </PolicyContent>
              </Policy>
              ;
              <Policy>
                <PolicyTitle>Salud y seguridad</PolicyTitle>
                <PolicyContent>
                  {healthHygiene && healthHygiene.map((content) => {
                    console.log(content);
                    return <PolicyItem>{content.description}</PolicyItem>;
                  }) }
                </PolicyContent>
              </Policy>
              ;
              <Policy>
                <PolicyTitle>Politica de cancelación</PolicyTitle>
                <PolicyContent>
                    <PolicyItem>{cancellationPolicy && cancellationPolicy}</PolicyItem>;

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