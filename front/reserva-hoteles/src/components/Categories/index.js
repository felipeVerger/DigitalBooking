import React from 'react'
import { Body, CategoryBlock, SectionTitle, FlexWrapper, ErrorMessage} from './IndexStyle'
import CategoryCard from './CategoryCard'
import Loading from '../Loading/index'

import useFetch from '../../hooks/useFetch'

const URL_API = `${process.env.REACT_APP_URL_REMOTE}/categories/findAll`

const Categorias = () => {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");

    const { data, loading, error } = useFetch(URL_API, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    });

  if (loading) {
    return <Loading/>
  } else if (error){
    return <ErrorMessage>Hubo un error, intente mas tarde</ErrorMessage>
  } else {
    return (
        <Body>
            <CategoryBlock>
                <SectionTitle>Buscar por tipo de alojamiento</SectionTitle>
                <FlexWrapper>
                    {
                        data?.map((item) => {
                            return (
                                <CategoryCard
                                    key={item.id}
                                    img={item.urlImage}
                                    category={item.title}
                                    amount={item.amount}
                                    type={item.title}
                                />
                            )
                        })
                    }
                </FlexWrapper>
            </CategoryBlock>
        </Body>
        )
    }
}

export default Categorias