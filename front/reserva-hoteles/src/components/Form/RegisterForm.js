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

  const register = () => {
    setUser({ ...formValues });
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    setErrors(validate(formValues));
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
    } else if (values.confirmarPass != values.password) {
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
            <Label for={"nombre"}>Nombre</Label>
            <TextField
              name={"nombre"}
              type={"text"}
              placeholder={"John"}
              onChange={handleChange}
            />
            <ErrorText>{errors.nombre}</ErrorText>
          </InputContainer>
          <InputContainer>
            <Label for={"apellido"}>Apellido</Label>
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
          <Label for={"email"}>Correo electrónico</Label>

          <TextField
            name={"email"}
            placeholder={"correo@electrónico.com"}
            type={"email"}
            onChange={handleChange}
          />
          <ErrorText>{errors.email}</ErrorText>
        </InputContainer>

        <InputContainer>
          <Label for={"password"}>Contraseña</Label>
          <TextField
            name={"password"}
            placeholder={"●●●●●●"}
            type={"password"}
            onChange={handleChange}
          />
          <ErrorText>{errors.password}</ErrorText>
        </InputContainer>

        <InputContainer>
          <Label for={"confirmarPass"}>Confirmar contraseña</Label>
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
