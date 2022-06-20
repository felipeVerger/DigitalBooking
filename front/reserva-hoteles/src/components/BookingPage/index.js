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
} from './BookingComponents'
import Form from './Form'

const Booking = ({product}) => {
  return (
    <Container>
        <HeaderBody>
        <HeaderBlock>
          <HeaderInfo>
            <HeaderCategory>{product.category.title}</HeaderCategory>
            <HeaderName>{product.name}</HeaderName>
          </HeaderInfo>
          <CleanLink to={"/"}>
            <BackIcon />
          </CleanLink>
        </HeaderBlock>
      </HeaderBody>
      <BookingBlock>
        <BookingBlockInfo>
          <Form />
        </BookingBlockInfo>
      </BookingBlock>
    </Container>
  )
}

export default Booking