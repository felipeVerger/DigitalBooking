import React, { useState } from "react";
import {
  FormContainer,
  TextField,
  HorizontalBlock,
  FormTitle,
  Label,
  Sumbit,
  InputContainer,
  FormSwitchText,
} from "./FormComponents";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  return (
    <FormContainer>
      <FormTitle>Crear cuenta</FormTitle>
      <HorizontalBlock>
        <InputContainer>
          <Label for={"nombre"}>Nombre</Label>
          <TextField errors={errors} name={"nombre"} type={"text"}  placeholder={"John"}/>
        </InputContainer>
        <InputContainer>
          <Label for={"apellido"}>Apellido</Label>
          <TextField errors={errors} name={"apellido"} type={"text"} placeholder={"Doe"} />
        </InputContainer>
      </HorizontalBlock>

      <InputContainer>
        <Label for={"mail"}>Correo electrónico</Label>

        <TextField
          errors={errors}
          name={"mail"}
          placeholder={"correo@electrónico.com"}
          type={"email"}
        />
      </InputContainer>

      <InputContainer>
        <Label for={"pass"}>Contraseña</Label>
        <TextField
          errors={errors}
          name={"pass"}
          placeholder={"●●●●●●"}
          type={"password"}
        />
      </InputContainer>

      <InputContainer>
        <Label for={"confirmarPass"}>Confirmar contraseña</Label>
        <TextField
          errors={errors}
          name={"pass"}
          placeholder={"●●●●●●"}
          type={"password"}
        />
      </InputContainer>

      <Sumbit type={"submit"} value="Crear cuenta" />

      <FormSwitchText>
        ¿Ya tienes una cuenta? <Link to={"/login"}>Iniciar sesión</Link>
      </FormSwitchText>
    </FormContainer>
  );
};

export default RegisterForm;
