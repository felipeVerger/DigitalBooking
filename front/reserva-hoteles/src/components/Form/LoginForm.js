import React, { useState } from "react";
import {
  FormContainer,
  TextField,
  HorizontalBlock,
  FormTitle,
  Label,
} from "./FormComponents";

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  return (
    <FormContainer>
      <FormTitle>Iniciar sesión</FormTitle>

      <Label for={"mail"}>Correo electrónico</Label>

      <TextField
        label={"Correo electrónico"}
        errors={errors}
        name={"mail"}
        placeholder={"correo@electronico.com"}
        type={"email"}
      />

<Label for={"pass"}>Contraseña</Label>

<TextField
        label={"Correo electrónico"}
        errors={errors}
        name={"pass"}
        placeholder={"●●●●●●"}
        type={"password"}
      />
    </FormContainer>
  );
};

export default LoginForm;
