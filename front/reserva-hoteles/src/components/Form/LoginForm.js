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
  const [errors, setErrors] = useState({});
  return (
    <FormContainer>
      <FormTitle>Iniciar sesión</FormTitle>
      <InputContainer>
        <Label for={"mail"}>Correo electrónico</Label>

        <TextField
          label={"Correo electrónico"}
          errors={errors}
          name={"mail"}
          placeholder={"correo@electrónico.com"}
          type={"email"}
        />
      </InputContainer>
      <InputContainer>
        <Label for={"pass"}>Contraseña</Label>

        <TextField
          label={"Correo electrónico"}
          errors={errors}
          name={"pass"}
          placeholder={"●●●●●●"}
          type={"password"}
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
