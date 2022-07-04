import React, { useEffect} from 'react'
import Section from "../components/Section";
import PageContainer from "../components/PageContainer";
import Layout from "../components/Layout";
import ProductPage from '../components/ProductPage';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading';

const Product = () => {
  const { id } = useParams(); 

  const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");

  const { data, loading, error } = useFetch(`${process.env.REACT_APP_URL_REMOTE}/products/` + id, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  })



const productoTemp = {    "id": 1,
"name": "Hotel Casa Gabriela",
"description": "Poderoso hotel a bajo costo",
"address": "Calle 24 35 - 22",
"longitude": "72",
"latitude": "39",
"title": "Una experiencia unica en el corazon de Colombia",
"houseRules": ["Check-out: 10:00", "No se permiten fiestas", "No fumar"],
"healthAndHygiene": ["Se aplican las pautas de distanciamento social y otras normas relacionadas con el coronavirus", "Detector de humo", "Deposito de seguridad"],
"cancellationPolicy": ["Agrega las fechas de tu viaje para obtener detalles de cancelacion de esta estadia"],
"images": ["https://pix10.agoda.net/hotelImages/109/10997/10997_17090816420056162871.jpg?ca=6&ce=1&s=1024x768", "https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North", "https://digital.ihg.com/is/image/ihg/even-hotels-eugene-5405616297-4x3", "https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/brand_level/footer/1920x1000/thr_aboutus1_1920x1000.jpg", "https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg"],
"category": {
    "id": 1,
    "title": "Hoteles",
    "description": "Hoteles para hospedarse por días",
    "urlImage": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31632859.jpg?k=19bfe4926b06a25446fe9f168e5c4f924ed0f592d83023111af0fb2129a2b2cf&o=&hp=1"
},
"features": [],
"rating": 8,
"city": {
    "id": 1,
    "name": "Bogotá",
    "country": "Colombia"
}
}

  return (
    <PageContainer>
    <Layout>
      <Section>
      {loading ? <Loading/> : <ProductPage product={productoTemp} productDetail={data}/>}
      </Section>
      </Layout>
    </PageContainer>

  )
}

export default Product