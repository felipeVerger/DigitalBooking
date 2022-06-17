import React, {useState, useEffect} from 'react'
import {
    HeaderBody,
    HeaderBlock,
    HeaderInfo,
    HeaderCategory,
    HeaderName,
    CleanLink,
    BackIcon,
} from './BookingComponents'

const Booking = ({product}) => {
  return (
    <>
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
    </>
  )
}

export default Booking