import React from 'react'
import products from '../../staticData/products.json'
import { Body, Block, Title, RecommendationContainer, ErrorMessage, Button } from './indexStyle'
import RecomendationCard from './RecomendationCard'

const Recomendaciones = () => {

  return products ? (
    <Body>
        <Block>
            <Title>Recomendaciones</Title>
            <RecommendationContainer>
                {/* Si el llamado a la api falla mostramos este mensaje */}
                {products.length === 0 && (
                        <div>
                            <ErrorMessage>Lo sentimos no hemos encontrado resultados para tu busqueda</ErrorMessage>
                            <Button to={'/'}>Home</Button>
                        </div>
                )}
                {
                    products.map((product) => {
                        return (
                            <RecomendationCard
                                key={product.id}
                                img={product.crimg}
                                category={product.category}
                                title={product.title}
                                location={product.location}
                                description={product.description}
                                puntuation={product.puntuation}
                                id={product.id}
                            />
                        )
                    })
                }
            </RecommendationContainer>
        </Block>
    </Body>
  ) : null;
}

export default Recomendaciones