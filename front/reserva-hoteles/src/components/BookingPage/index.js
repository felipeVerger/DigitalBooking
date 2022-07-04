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



const Booking = ({product, productDetail}) => {
  // const {category = {} } = product;
  const {id, name, subtitle, description, address, images, score, longitude, latitude, city = {}, category = {} } = productDetail;
  console.log(productDetail);

  return (
    <Container>
        <HeaderBody>
        <HeaderBlock>
          <HeaderInfo>
            <HeaderCategory>{category.title}</HeaderCategory>
            <HeaderName>{name}</HeaderName>
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
                  {product.houseRules !== undefined ? product.houseRules.map((content) => {
                    return <PolicyItem>{content}</PolicyItem>;
                  }) : null}
                </PolicyContent>
              </Policy>
              ;
              <Policy>
                <PolicyTitle>Salud y seguridad</PolicyTitle>
                <PolicyContent>
                  {product.healthAndHygiene !== undefined ? product.healthAndHygiene.map((content) => {
                    return <PolicyItem>{content}</PolicyItem>;
                  }) : null}
                </PolicyContent>
              </Policy>
              ;
              <Policy>
                <PolicyTitle>Politica de cancelacion</PolicyTitle>
                <PolicyContent>
                    <PolicyItem>{product.cancellationPolicy}</PolicyItem>;

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