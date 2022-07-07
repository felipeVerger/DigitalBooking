import React, { useEffect, useState } from 'react'
import {
  Form,
  ImageContainer,
  ImageTitle,
  ImageBlock,
  TextField,
  ErrorText,
  SubmitButton
} from './FormComponents';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';


const DeleteForm = () => {
  const [id, setId] = useState('');
  const [errors, setErrors] = useState({});
  const [toSumbit, setToSumbit] = useState(false);
  const navigate = useNavigate();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");
  myHeaders.append("Content-Type", "application/json");

  const deleteProduct = () => {
    const URL_API_DELETE_PRODUCT = `${process.env.REACT_APP_URL_REMOTE}/products/`;
    let options = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    }
    fetch(URL_API_DELETE_PRODUCT + id, options)
      .then((response) => {
        if (response.ok) {
          navigate('/')
          return Swal.fire({
            icon: 'success',
            title: 'El producto se ha eliminado correctamente',
            showConfirmButton: false,
          });
        } else {
          return Swal.fire({
            title: `Error ${response.status}`,
            text: 'Lamentablemente, el producto no ha podido eliminarse. Por favor, intente mas tarde',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
      })
      .then(data => {
        console.log(data);
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(id));
    console.log(id);
    setToSumbit(true);
  };

  const validate = () => {
    const errors = {};
    if (!id) {
      return errors.id = 'Este campo es obligatorio';
    }
    return errors;
  }


  useEffect(() => {
    if (Object.keys(errors).length === 0 && toSumbit) {
      deleteProduct();
    }
  }, [errors]);
  return (
    <Form>
      <ImageContainer>
        <ImageTitle>Cargar Id de producto</ImageTitle>
        <ImageBlock>
          <TextField
            name="id"
            value={id}
            type={"text"}
            placeholder="Insertar id de producto"
            onChange={(e) => setId(e.target.value)}
          />
        </ImageBlock>
        <ErrorText>{errors.id}</ErrorText>
      </ImageContainer>
      <SubmitButton
        type="submit"
        onClick={handleSubmit}
        to={"/administration/successful-product-creation"}
      >
        Eliminar
      </SubmitButton>
    </Form>
  )
}

export default DeleteForm