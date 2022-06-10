import React, { useEffect, useState } from 'react'
import { Body, CategoryBlock, SectionTitle, FlexWrapper} from './IndexStyle'
import CategoryCard from './CategoryCard'

const URL_API = 'http://localhost:8080/categories/findAll'

const Categorias = () => {
    const [categories, setCatgeories] = useState([]);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjo1ZGQ5N2E1Ny1hNmI2LTQ4ZTItOGJjOS03M2YzOTc1ZWVmZGQ=");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch(URL_API, requestOptions)
          .then((response) => response.json())
          .then((data) => setCatgeories(data))
          .catch(error => console.log('error', error));
      }, [])

  return (
    <Body>
        <CategoryBlock>
            <SectionTitle>Buscar por tipo de alojamiento</SectionTitle>
            <FlexWrapper>
                {
                    categories.map((item) => {
                        return (
                            <CategoryCard
                                key={item.id}
                                img={item.urlImage}
                                category={item.title}
                                amount={item.description}
                                type={item.type}
                            />
                        )
                    })
                }
            </FlexWrapper>
        </CategoryBlock>
    </Body>
  )
}

export default Categorias