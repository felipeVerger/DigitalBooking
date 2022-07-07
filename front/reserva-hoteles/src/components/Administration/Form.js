import React, { useState, useEffect } from 'react'
import {
    Form,
    InputContainer,
    Label,
    TextField,
    SelectField,
    DescriptionBlock,
    DescriptionField,
    AtributesContainer,
    AtrTitle,
    Block,
    FlexWrapper,
    AtributeInputBlock,
    AtributeNameField,
    AtributeIconField,
    Button,
    ButtonIcon,
    PolicyContainer,
    PolicyTitle,
    PolicyBody,
    PolicyBlock,
    PolicyName,
    ImageContainer,
    ImageTitle,
    ImageBlock,
    PolicyField,
    SubmitButton,
    ErrorText
} from './FormComponents';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const URL_API_CITY = `${process.env.REACT_APP_URL_REMOTE}/cities/findAll`;
const URL_API_CATEGORIES = `${process.env.REACT_APP_URL_REMOTE}/categories/findAll`

const FormComponent = () => {
  const [formValues, setformValues] = useState({});
  const [city, setCity] = useState();
  const [category, setCategory] = useState();
  const [errors, setErrors] = useState({});
  const [toSumbit, setToSumbit] = useState(false);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handleCityChange = (e) => {
    setCity(e.value);
  }
  const handleCategoryChange = (e) => {
    setCategory(e.value);
  }


  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");
  myHeaders.append("Content-Type", "application/json");

  const { data: cities } = useFetch(URL_API_CITY, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  });

  const { data: categories } = useFetch(URL_API_CATEGORIES, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  });

  const createProduct = async () => {
    const URL_API_CREATE_PRODUCT = `${process.env.REACT_APP_URL_REMOTE}/products/create`;
    const body = JSON.stringify({
        "name": formValues.nombre,
        "subtitle": formValues.nombre,
        "category": {
          id: category,
        },
        "address": formValues.direccion,
        "city": {
          id: city,
      },
        "description": formValues.descripcion,
        "longitude": formValues.longitud,
        "latitude": formValues.latitud,
        "cancellationPolicy": formValues.cancelacion,
        "price": 3520.0,
        "score": 5,
        "images": [],
        "reservations": null,
        "favorites": null,
        "healthHygiene": null,
        "houseRules": null
    });
    console.log(body);
    let options = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: body,
    }
    await fetch(URL_API_CREATE_PRODUCT, options)
        .then((res) => {
          if (res.status === 200) {
            navigate('/administration/successful-product-creation');
          } else {
            Swal.fire({
              title: `Error ${res.status}`,
              text: 'Lamentablemente, el producto no ha podido crearse. Por favor, intente mas tarde',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            })
          }
        })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    // setErrors(validate(city))
    // setErrors(validate(category))
    // console.log(validate(formValues))
    setToSumbit(true);
  };

  const validate = (values) => {
    const errors = {};
    if(!values.nombre){
        errors.nombre = "Este campo es obligatorio."
    }
    if(!category){
        errors.categoria = "Este campo es obligatorio."
    }
    if(!values.direccion){
        errors.direccion = "Este campo es obligatorio."
    }
    if(!city){
        errors.ciudad = "Este campo es obligatorio."
    }
    if(!values.descripcion){
        errors.descripcion = "Este campo es obligatorio."
    }
    if(!values.latitud){
        errors.latitud = "Este campo es obligatorio."
    }
    if(!values.longitud){
        errors.longitud = "Este campo es obligatorio."
    }
    if(!values.nombreAtributo){
        errors.nombreAtributo = "Este campo es obligatorio."
    }
    if(!values.icono){
        errors.icono = "Este campo es obligatorio."
    }
    if(!values.normas){
        errors.normas = "Este campo es obligatorio."
    }
    if(!values.salud){
        errors.salud = "Este campo es obligatorio."
    }
    if(!values.cancelacion){
        errors.cancelacion = "Este campo es obligatorio."
    }
    if(!values.imagen){
        errors.imagen = "Este campo es obligatorio."
    }

    return errors;
  }

  // if the button is clicked add one more field of atributesContainer
  const handleButton = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && toSumbit) {
      createProduct();
    }
  }, [errors]);
  return (
    <Form>
      <InputContainer>
        <Label htmlFor="nombre">Nombre de la propiedad</Label>
        <TextField
          name={"nombre"}
          type={"text"}
          placeholder={"Hotel Hermitage"}
          onChange={handleChange}
        />
        <ErrorText>{errors.nombre}</ErrorText>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="categoria">Categoría</Label>
        <SelectField
          options={categories.map((item) => ({
            value: item.id,
            label: item.title,
          }))}
          name={'categoria'}
          placeholder={'Hotel'}
          onChange={handleCategoryChange}
        />
        <ErrorText>{errors.categoria}</ErrorText>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="direccion">Dirección</Label>
        <TextField
          name={"direccion"}
          type={"text"}
          placeholder="Av. Colon 1124"
          onChange={handleChange}
        />
        <ErrorText>{errors.direccion}</ErrorText>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="ciudad">Ciudad</Label>
        <SelectField
          options={cities.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
          name={'ciudad'}
          placeholder="Ciudad"
          onChange={handleCityChange}
        />
        <ErrorText>{errors.ciudad}</ErrorText>
      </InputContainer>
      <DescriptionBlock>
        <Label htmlFor="descripcion">Descripción</Label>
        <DescriptionField
          name={"descripcion"}
          placeholder="Escribir aqui"
          onChange={handleChange}
        />
        <ErrorText>{errors.descripcion}</ErrorText>
      </DescriptionBlock>
      <InputContainer>
        <Label htmlFor="latitud">Latitud</Label>
        <TextField
          name={"latitud"}
          type={"text"}
          placeholder="44.6578"
          onChange={handleChange}
        />
        <ErrorText>{errors.latitud}</ErrorText>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="longitud">Longitud</Label>
        <TextField
          name={"longitud"}
          type={"text"}
          placeholder="-34.6578"
          onChange={handleChange}
        />
        <ErrorText>{errors.longitud}</ErrorText>
      </InputContainer>
      <AtributesContainer>
        <AtrTitle>Agregar atributos</AtrTitle>
        <Block id='atributeBlock'>
          <FlexWrapper>
            <AtributeInputBlock>
                <Label htmlFor="nombreAtributo">Nombre</Label>
                <AtributeNameField
                name={"nombreAtributo"}
                type={"text"}
                placeholder="Wifi"
                onChange={handleChange}
                />
                <ErrorText>{errors.nombreAtributo}</ErrorText>
            </AtributeInputBlock>
            <AtributeInputBlock>
                <Label htmlFor="icono">Icono</Label>
                <AtributeIconField
                name={"icono"}
                type={"text"}
                placeholder="fa-Wifi"
                onChange={handleChange}
                />
                <ErrorText>{errors.icono}</ErrorText>
            </AtributeInputBlock>
          </FlexWrapper>
            <Button onClick={handleButton}>
                <ButtonIcon />
            </Button>
        </Block>
      </AtributesContainer>
      <PolicyContainer>
        <PolicyTitle>Políticas del producto</PolicyTitle>
        <PolicyBody>
          <PolicyBlock>
            <PolicyName>Normas de la casa</PolicyName>
            <Label htmlFor="normas">Descripción</Label>
            <PolicyField
              name={"normas"}
              type={"textarea"}
              placeholder="Escribir aqui"
              onChange={handleChange}
            />
            <ErrorText>{errors.normas}</ErrorText>
          </PolicyBlock>
          <PolicyBlock>
            <PolicyName>Salud y seguridad</PolicyName>
            <Label htmlFor="salud">Descripción</Label>
            <PolicyField
              name={"salud"}
              type={"textarea"}
              placeholder="Escribir aqui"
              onChange={handleChange}
            />
            <ErrorText>{errors.salud}</ErrorText>
          </PolicyBlock>
          <PolicyBlock>
            <PolicyName>Politica de cancelación</PolicyName>
            <Label htmlFor="cancelacion">Descripción</Label>
            <PolicyField
              name={"cancelacion"}
              type={"textarea"}
              placeholder="Escribir aqui"
              onChange={handleChange}
            />
            <ErrorText>{errors.cancelacion}</ErrorText>
          </PolicyBlock>
        </PolicyBody>
      </PolicyContainer>
      <ImageContainer>
        <ImageTitle>Cargar imagenes</ImageTitle>
        <ImageBlock>
          <TextField
            name="imagen"
            type={"url"}
            placeholder="Insertar https://"
            onChange={handleChange}
          />
          <Button onClick={handleButton}>
            <ButtonIcon />
          </Button>
        </ImageBlock>
        <ErrorText>{errors.imagen}</ErrorText>
      </ImageContainer>
      <SubmitButton
        type="submit"
        onClick={handleSubmit}
        to={"/administration/successful-product-creation"}
      >
        Crear
      </SubmitButton>
    </Form>
  );
}

export default FormComponent;