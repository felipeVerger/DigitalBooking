import React, { useState } from "react";
import {
  FormContainer,
  TextField,
  HorizontalBlock,
  InputContainer,
  FormTitle,
  Label,
  Sumbit,
  FormSwitchText,
} from "./FormComponents";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formValues, setformValues] = useState({email: "", password: ""});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setformValues({...formValues, name: value});


    const handleSubmit = (e) => {
      e.preventDefault();
    }
  }
  return (
    <FormContainer>
      <FormTitle>Iniciar sesión</FormTitle>
      <InputContainer>
        <Label for={"email"}>Correo electrónico</Label>

        <TextField
          label={"Correo electrónico"}
          errors={errors}
          name={"email"}
          placeholder={"correo@electrónico.com"}
          type={"email"}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <Label for={"password"}>Contraseña</Label>

        <TextField
          label={"Correo electrónico"}
          errors={errors}
          name={"password"}
          placeholder={"●●●●●●"}
          type={"password"}
          onChange={handleChange}
        />
      </InputContainer>

      <Sumbit type={"submit"} value="Ingresar" />
      <FormSwitchText>
        ¿Aún no tenes cuenta? <Link to={"/register"}> Registrate</Link>
      </FormSwitchText>
    </FormContainer>
  );
};

export default LoginForm;
