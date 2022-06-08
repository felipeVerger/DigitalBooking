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

    ],
    desc_title: "Alojate en el corazon de Buenos Aires",
    desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    politicas: [
      {title: "Normas de la casa", 
     list: ["Check-out 10:00", "No se permiten fiestas", "No fumar"]}
    ,
    {
    title: "Salud y seguridad", 
    list: ["Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus", "Detector de humo", "Deposito de seguridad"]}
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