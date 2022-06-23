import React, { useState, useEffect, useContext} from "react";
import {
  FormContainer,
  TextField,
  HorizontalBlock,
  InputContainer,
  FormTitle,
  Label,
  Sumbit,
  FormSwitchText,
  ErrorText,
} from "./FormComponents";
import { Link, useNavigate, Navigate, useLocation} from "react-router-dom";
import { UserContext } from "../../context/user-context";

const LoginForm = () => {
  const [formValues, setformValues] = useState({});
  const [errors, setErrors] = useState({});
  const [toSumbit, setToSumbit] = useState(false);

  const navigate = useNavigate();

  const {user, setUser} = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const login = () => {
    setUser({email: formValues.email, nombre: formValues.email.split("@")[0]});
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setToSumbit(true);
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};
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

    return errors;
  };

  const location = useLocation();

  const prevUrl = 

  useEffect(() => {
    if (Object.keys(errors).length === 0 && toSumbit) {
      login();
    }
  }, [errors]);

    if (user) {
      return <Navigate to={'/'} />
  }
  else return(
    <FormContainer>
      {localStorage.getItem('token') ? null : <h2>Debes registrarte para reservar un producto</h2>}
      <FormTitle>Iniciar sesión</FormTitle>
      <InputContainer>
        <Label htmlFor={"email"}>Correo electrónico</Label>

        <TextField
          label={"Correo electrónico"}
          errors={errors}
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
          label={"Correo electrónico"}
          errors={errors}
          name={"password"}
          placeholder={"●●●●●●"}
          type={"password"}
          onChange={handleChange}
        />
        <ErrorText>{errors.password}</ErrorText>
      </InputContainer>

      <Sumbit type={"submit"} value="Ingresar" onClick={handleSubmit} />
      <FormSwitchText>
        ¿Aún no tenes cuenta? <Link to={"/register"}> Registrate</Link>
      </FormSwitchText>
    </FormContainer>);
};

export default LoginForm;
