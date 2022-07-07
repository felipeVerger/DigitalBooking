import React, { useState } from 'react'
import {
    HeaderBody,
    HeaderBlock,
    HeaderInfo,
    CleanLink,
    BackIcon,
    HeaderName,
    FormBackground,
    FormBody,
    Title,
    FormContainer,
    NavigationButtonsBlock,
    NavButton
} from './AdminComponents'
import FormComponent from './Form'
import EditForm from './EditForm';
import DeleteForm from './DeleteForm';



const Administration = () => {
  const [page, setPage] = useState('create');

  const handlePage = (page) => {
    if (page === 'create') {
      setPage('create');
    } else if (page === 'edit') {
      setPage('edit');
    } else {
      setPage('delete');
    }
  }

  return (
    <div>
        <HeaderBody>
        <HeaderBlock>
          <HeaderInfo>
            <HeaderName>Administrácion</HeaderName>
          </HeaderInfo>
          <CleanLink to={"/"}>
            <BackIcon />
          </CleanLink>
        </HeaderBlock>
      </HeaderBody>
      <FormBackground>
        <FormBody>
            <NavigationButtonsBlock>
              <NavButton onClick={() => handlePage('create')}>Crear</NavButton>
              <NavButton onClick={() => handlePage('edit')}>Editar</NavButton>
              <NavButton onClick={() => handlePage('delete')}>Eliminar</NavButton>
            </NavigationButtonsBlock>
            <Title>{page === 'create' ? 'Crear' : page === 'edit' ? 'Editar' : 'Eliminar'} propiedad</Title>
            <FormContainer>
                {page === 'create' ? <FormComponent /> : page === 'edit' ? <EditForm/> : <DeleteForm/>}
            </FormContainer>
        </FormBody>
      </FormBackground>
    </div>
  )
}

export default Administration;