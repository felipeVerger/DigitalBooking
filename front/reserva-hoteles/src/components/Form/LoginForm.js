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
  ErrorMessage,
  ErrorReservation,
  WarningIcon,
  OpenEye,
  ClosedEye
} from "./FormComponents";
import { Link, useNavigate, Navigate, useLocation} from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { BookingContext } from "../../context/booking-context";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [formValues, setformValues] = useState({});
  const [errors, setErrors] = useState({});
  const [toSumbit, setToSumbit] = useState(false);
  const { isRegistered, setIsRegistered } =  useContext(BookingContext);
  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext);
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
    if (showPass) {
      document.getElementById("password").type = "password";
    } else {
      document.getElementById("password").type = "text";
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const login = () => {
    setUser({email: formValues.email, nombre: formValues.email.split("@")[0]});
    navigate("/");
  };

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");
  myHeaders.append("Content-Type", "application/json");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setToSumbit(true);
    let url = `${process.env.REACT_APP_URL_REMOTE}/auth/signin`;
    let body = JSON.stringify({
      "email": formValues.email,
      "password": formValues.password
    });
    let options = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: body
    }
    e.preventDefault();
    console.log(formValues);
     await fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          if (response.status === 401) {
            return Swal.fire({
              title: `Error ${response.status}`,
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
        console.log(data);
      })
    // return data;
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


  useEffect(() => {
    if (Object.keys(errors).length === 0 && toSumbit) {
    }
  }, [errors]);

    if (user) {
      return <Navigate to={'/'} />
  }
  else return(
    <FormContainer>
      {isRegistered ? null :
      <ErrorReservation>
        <ErrorMessage><WarningIcon/> Para realizar una reserva necesitas estar logueado</ErrorMessage>
      </ErrorReservation>
      }
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
          id="password"
          label={"Correo electrónico"}
          errors={errors}
          name={"password"}
          placeholder={"●●●●●●"}
          type={"password"}
          onChange={handleChange}
        />
        {/* <div onClick={handleShowPass}>
          { showPass ? <OpenEye/> : <ClosedEye/>}
        </div> */}
        <ErrorText>{errors.password}</ErrorText>
      </InputContainer>

      <Sumbit type={"submit"} value="Ingresar" onClick={handleSubmit} />
      <FormSwitchText>
        ¿Aún no tenes cuenta? <Link to={"/register"}> Registrate</Link>
      </FormSwitchText>
    </FormContainer>);
};

export default LoginForm;
