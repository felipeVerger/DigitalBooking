import React, { useState, useEffect, useContext } from "react";
import {
  FormContainer,
  TextField,
  HorizontalBlock,
  FormTitle,
  Label,
  Sumbit,
  InputContainer,
  FormSwitchText,
  ErrorText,
} from "./FormComponents";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";


const RegisterForm = () => {
  const [formValues, setformValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();
  const [toSumbit, setToSumbit] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");
  myHeaders.append("Content-Type", "application/json");

  const register = async  () => {
    let url = 'http://internal-dev-dinamita-lb-backend-649823592.us-west-2.elb.amazonaws.com/auth/signup';
    let body = JSON.stringify({
      "name": formValues.nombre,
      "lastName": formValues.apellido,
      "email": formValues.email,
      "role": "ROLE_USER",
      "password": formValues.password,
      "city": formValues.ciudad
    });
    let options = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: body
    }
    console.log(formValues);
    const response = await fetch(url, options)
    .catch(() => {
      alert("Hubo un error. Reintentalo mas tarde.")
      return;});
    const data = await response.json();
    // return data;
    console.log(data);
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('name', data.name);
    sessionStorage.setItem('lastName', data.lastName);
    window.location.reload();
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    console.log(validate(formValues))
    setToSumbit(true);
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};

    if (!values.nombre) {
      errors.nombre = "Este campo es obligatorio.";
    }

    if (!values.apellido) {
      errors.apellido = "Este campo es obligatorio.";
    }

    if (!values.ciudad) {
      errors.ciudad = "Este campo es obligatorio.";
    }

    if (!values.email) {
      errors.email = "Este campo es obligatorio.";
    } else if (!regex.test(values.email)) {
      errors.email = "El correo electrónico ingresado no es valido.";
    }

    if (!values.password) {
      errors.password = "Este campo es obligatorio.";
    } else if (values.password.length < 6) {
      errors.password = "La contraseña tiene que ser minimo de 6 caracteres.";
    }

    if (!values.confirmarPass) {
      errors.confirmarPass = "Este campo es obligatorio.";
    } else if (values.confirmarPass !== values.password) {
      errors.confirmarPass = "La contraseña no coincide.";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && toSumbit) {
      register();
    }
  }, [errors]);
  if (user) {
    return <Navigate to={"/"} />;
  } else {
    return (
      <FormContainer>
        <FormTitle>Crear cuenta</FormTitle>
        <HorizontalBlock>
          <InputContainer>
            <Label htmlFor={"nombre"}>Nombre</Label>
            <TextField
              name={"nombre"}
              type={"text"}
              placeholder={"John"}
              onChange={handleChange}
            />
            <ErrorText>{errors.nombre}</ErrorText>
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"apellido"}>Apellido</Label>
            <TextField
                name={"apellido"}
                type={"text"}
                placeholder={"Doe"}
                onChange={handleChange}
            />
            <ErrorText>{errors.apellido}</ErrorText>
          </InputContainer>
        </HorizontalBlock>
        <InputContainer>
          <Label htmlFor={"ciudad"}>Ciudad</Label>
          <TextField
              name={"ciudad"}
              type={"text"}
              placeholder={"Bogotá"}
              onChange={handleChange}
          />
          <ErrorText>{errors.ciudad}</ErrorText>
        </InputContainer>

        <InputContainer>
          <Label htmlFor={"email"}>Correo electrónico</Label>

          <TextField
            name={"email"}
            placeholder={"correo@electrónico.com"}
            type={"email"}
            onChange={handleChange}
          />
          <ErrorText>{errors.email}</ErrorText>
        </InputContainer>

        <InputContainer>
          <Label htmlFor={"password"}>Contraseña</Label>
          <TextField
            name={"password"}
            placeholder={"●●●●●●"}
            type={"password"}
            onChange={handleChange}
          />
          <ErrorText>{errors.password}</ErrorText>
        </InputContainer>

        <InputContainer>
          <Label htmlFor={"confirmarPass"}>Confirmar contraseña</Label>
          <TextField
            name={"confirmarPass"}
            placeholder={"●●●●●●"}
            type={"password"}
            onChange={handleChange}
          />
          <ErrorText>{errors.confirmarPass}</ErrorText>
        </InputContainer>

        <Sumbit type={"submit"} value="Crear cuenta" onClick={handleSubmit} />

        <FormSwitchText>
          ¿Ya tienes una cuenta? <Link to={"/login"}>Iniciar sesión</Link>
        </FormSwitchText>
      </FormContainer>
    );
  }
};

export default RegisterForm;
