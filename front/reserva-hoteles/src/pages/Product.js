import React from 'react'
import Section from "../components/Section";
import PageContainer from "../components/PageContainer";
import Layout from "../components/Layout";
import ProductPage from '../components/ProductPage';


const Product = ({product}) => {


const productoTemp = {    "id": 1,
"name": "Hotel Casa Gabriela",
"description": "Poderoso hotel a bajo costo",
"address": "Calle 24 35 - 22",
"longitude": "72",
"latitude": "39",
"title": "Una experiencia unica en el corazon de Colombia",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor nibh dapibus faucibus pellentesque. Etiam eu auctor sem, quis cursus ex. Maecenas gravida mollis pellentesque. Nunc feugiat laoreet libero quis vestibulum. In et finibus ipsum. Etiam pulvinar mauris arcu, et rhoncus quam laoreet quis. Aliquam lacinia erat at ipsum finibus tincidunt. Ut luctus, orci at ultricies convallis, nunc metus luctus nibh, non suscipit ex neque suscipit lorem. Pellentesque ornare laoreet odio, in fermentum purus aliquam eget. Integer non faucibus mi, sed tincidunt mi. Pellentesque nec convallis sem. Aliquam erat volutpat. Phasellus enim ligula, suscipit vel nisi non, aliquet laoreet mauris. Cras et ante ut purus euismod ultricies. Donec molestie, enim vel commodo tempor, ex leo sollicitudin libero, sed varius lectus ante nec tellus. Curabitur efficitur, dui quis cursus volutpat, lorem ante pretium nunc, at auctor tortor nulla id orci.",
"houseRules": ["Check-out: 10:00", "No se permiten fiestas", "No fumar"],
"healthAndHygiene": ["Se aplican las pautas de distanciamento social y otras normas relacionadas con el coronavirus", "Detector de humo", "Deposito de seguridad"],
"cancellationPolicy": ["Agrega las fechas de tu viaje para obtener detalles de cancelacion de esta estadia"],
"images": ["https://pix10.agoda.net/hotelImages/109/10997/10997_17090816420056162871.jpg?ca=6&ce=1&s=1024x768", "https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North", "https://digital.ihg.com/is/image/ihg/even-hotels-eugene-5405616297-4x3", "https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/brand_level/footer/1920x1000/thr_aboutus1_1920x1000.jpg", "https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg"],
"category": {
    "id": 1,
    "title": "Hoteles",
    "description": "Hoteles para hospedarse por d??as",
    "urlImage": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31632859.jpg?k=19bfe4926b06a25446fe9f168e5c4f924ed0f592d83023111af0fb2129a2b2cf&o=&hp=1"
},
"features": [],
"rating": 8,
"city": {
    "id": 1,
    "name": "Bogot??",
    "country": "Colombia"
}
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