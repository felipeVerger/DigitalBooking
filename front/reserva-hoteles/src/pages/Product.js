import React from 'react'
import Section from "../components/Section";
import PageContainer from "../components/PageContainer";
import Layout from "../components/Layout";
import ProductPage from '../components/ProductPage';


const Product = ({product}) => {

  const productoTemp = {
    category: "Hotel",
    name: "Hermitage Hotel",
    location: "Buenos Aires, Argentina",
    distancia: "A 900 m del centro",
    rating: 8,
    images: [
      "https://www.hiltonhotels.com/assets/img/brands/Conrad/11835%20[WA]_Translation_Pages_Images_1440x561_CONRAD_Muraka.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
      "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1",

    ]
  }

  return (
    <PageContainer>
    <Layout>
      <Section>
        <ProductPage product={productoTemp} />
      </Section>
      </Layout>
    </PageContainer>
  )
}

export default Product