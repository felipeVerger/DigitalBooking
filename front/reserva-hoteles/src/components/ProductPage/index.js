import React from 'react'
import { HeaderBody, HeaderBlock, HeaderCategory, HeaderName, HeaderInfo, BackIcon, CleanLink} from './ProductPageComponents'

const ProductPage = ({product}) => {
  return (
        <HeaderBody>
        <HeaderBlock>
            <HeaderInfo>
            <HeaderCategory>{product.category}</HeaderCategory>
            <HeaderName>{product.name}</HeaderName>
            </HeaderInfo>
           <CleanLink to={"/"}><BackIcon /></CleanLink>
            </HeaderBlock>
            
    </HeaderBody>
  )
}

export default ProductPage