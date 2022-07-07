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
  OpenEye,
  ClosedEye
} from "./FormComponents";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import Swal from 'sweetalert2';


const RegisterForm = () => {
  const [formValues, setformValues] = useState({});
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  
  /**
   * If showPass is true, then set showPass to false and change the type of the password input to
   * "password". If showPass is false, then set showPass to true and change the type of the password
   * input to "text".
   */
  const handleShowPass = () => {
    setShowPass(!showPass);
    showPass ? (document.getElementById("password").type = "password") : (document.getElementById("password").type = "text");
  }
  const handleShowPass2 = () => {
    setShowPass2(!showPass2);
    showPass2 ? (document.getElementById("password2").type = "password") : (document.getElementById("password2").type = "text");
  }

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
    let url = `${process.env.REACT_APP_URL_REMOTE}/auth/signup`;
    let body = JSON.stringify({
      "name": formValues.nombre,
      "lastName": formValues.apellido,
      "email": formValues.email,
      "role": "ROLE_USER",
      "password": formValues.password,
    });
    let options = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: body
    }
    console.log(formValues);
    const response = await fetch(url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        if (response.status === 401) {
          return Swal.fire({
            title: `Error ${res.status}`,
            icon: 'error',
            text: 'Lamentablemente no ha podido iniciar sesion. Por favor, intente mas tarde',
          })
        }
      }
    })
    .then((data) => {
      sessionStorage.setItem('id', data.id);
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('email', data.email);
      sessionStorage.setItem('name', data.name);
      sessionStorage.setItem('lastName', data.lastName);
      sessionStorage.setItem('role', data.authorities[0].authority);
      window.location.reload();
    })
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
            id="password"
            name={"password"}
            placeholder={"●●●●●●"}
            type={"password"}
            onChange={handleChange}
          />
          {/* <div onClick={handleShowPass}>
            {showPass ? <OpenEye/> : <ClosedEye/>}
          </div> */}
          <ErrorText>{errors.password}</ErrorText>
        </InputContainer>

        <InputContainer>
          <Label htmlFor={"confirmarPass"}>Confirmar contraseña</Label>
          <TextField
            id="password2"
            name={"confirmarPass"}
            placeholder={"●●●●●●"}
            type={"password"}
            onChange={handleChange}
          />
          {/* <div onClick={handleShowPass2}>
            {showPass2 ? <OpenEye/> : <ClosedEye/>}
          </div> */}
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
