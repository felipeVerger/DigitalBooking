import React, { useState, useContext, useEffect } from "react";
import { ErrorText } from "../Form/FormComponents";
import {
  FormBlock,
  TextField,
  InputContainer,
  LabelColor,
  FormContainer,
  FormTitle,
  CalendarContainer,
  IconContainer,
  Title,
  SubTitle,
  Span,
  Column,
  Padding,
  ConfirmationBlock,
  ColumnForm,
  Image,
  IconContainerSmall,
  Row,
  Dates,
  Div,
  InfoDetailProduct,
  CategoryTitle
} from "./FormStyle";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Calendar from "react-date-range/dist/components/Calendar";
import { addDays } from "date-fns";
import { themes } from "../../assets/themes";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Select from "react-select";
import { ReservationButton, Separator } from "../ProductPage/ProductPageComponents";
import {MdLocationOn} from 'react-icons/md';



const Form = ({product}) => {
  const {id, name, address, images, city = {}, category = {} } = product;
  const [formValues, setformValues] = useState({});
  const [errors, setErrors] = useState({});
  const [toSumbit, setToSumbit] = useState(false);

  console.log(product);

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };


  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");
  myHeaders.append("Content-Type", "application/json");

  const register = async  () => {
    let url = `${process.env.REACT_APP_URL_REMOTE}/reservations`;
    let body = JSON.stringify({
      "name": formValues.nombre,
      "lastName": formValues.apellido,
      "email": formValues.email,
      "city": formValues.ciudad,
      "startDate": dates.startDate,
      "endDate": dates.endDate
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
      
      return;});
    navigate("successful");
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    console.log(validate(formValues))
    setToSumbit(true);
  };

  const optionsString = [
   "0:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "13:00 PM",
    "14:00 PM",
    "15:00 PM",
    "16:00 PM",
    "17:00 PM",
    "18:00 PM",
    "19:00 PM",
    "20:00 PM",
    "21:00 PM",
    "22:00 PM",
    "23:00 PM",
    "24:00 PM",
  ];

  const options = optionsString.map((i) => { return {value: i, label: i}})


  const defaultOption = options[12];

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

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



    return errors;
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


  useEffect(() => {
    if (Object.keys(errors).length === 0 && toSumbit) {
      register();
    }
  }, [errors]);

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return (
   
      <FormContainer>
         <ColumnForm>
        <FormTitle>Completa tus datos</FormTitle>
          <FormBlock>
            <InputContainer>
              <LabelColor htmlFor={"nombre"}>Nombre</LabelColor>
              <TextField
                name={"nombre"}
                type={"text"}
                placeholder={"Bruno"}
                onChange={handleChange}
              />
              <ErrorText>{errors.nombre}</ErrorText>
            </InputContainer>
            <InputContainer>
              <LabelColor htmlFor={"apellido"}>Apellido</LabelColor>
              <TextField
                name={"apellido"}
                type={"text"}
                placeholder={"Rodriguez"}
                onChange={handleChange}
              />
              <ErrorText>{errors.apellido}</ErrorText>
            </InputContainer>
            <InputContainer>
              <LabelColor htmlFor={"email"}>Correo electrónico</LabelColor>
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
              <LabelColor htmlFor={"ciudad"}>Ciudad</LabelColor>
              <TextField
                name={"ciudad"}
                type={"text"}
                placeholder={"Rosario, Santa Fe"}
                onChange={handleChange}
              />
              <ErrorText>{errors.ciudad}</ErrorText>
            </InputContainer>
          </FormBlock>
          <FormTitle>Selecciona tu fecha de reserva</FormTitle>
          <CalendarContainer>
            <DateRange
              minDate={new Date()}
              months={getWindowDimensions().width > 768 ? 2 : 1}
              direction="horizontal"
              disabledDates={[]}
              onChange={(item) => setDates([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              color={themes.light.primary}
              locale={es}
              rangeColors={[themes.light.primary]}
            />
          </CalendarContainer>
          <FormTitle>Tu horario de llegada</FormTitle>
          <FormBlock>
            <SubTitle>
              <IconContainer>
                <IoIosCheckmarkCircleOutline />
              </IconContainer>{" "}
              Tu habitacion va a estar lista para el check-in entre las 10:00AM y
              las 11:00PM
            </SubTitle>
            <Column>
              <Span>Indica tu horario estimado de llegada</Span>
              <Select options={options} />;
            </Column>
          </FormBlock>
    </ColumnForm>
        <ConfirmationBlock>
          <Title>Detalle de la reserva</Title>
          <Image src={images && images[0] ? images[0]?.url : null} />
          <InfoDetailProduct>
            <CategoryTitle>{category.title}</CategoryTitle>
            <Title>{name}</Title>
            <Span><IconContainerSmall><MdLocationOn/></IconContainerSmall>{address}, {city.name}, {city.country}</Span>
          </InfoDetailProduct>
          <Separator />
          <Row>
          <SubTitle>Check in</SubTitle>
          <Dates>
            {dates[0].startDate ? dates[0].startDate.toDateString() : ""}
          </Dates>
          </Row>
          <Separator />
          <Row>
          <SubTitle>Check Out</SubTitle>
          <Dates>
            {dates[0].endDate ? dates[0].endDate.toDateString() : ""}
          </Dates>
          </Row>
          <Div>
            <ReservationButton onClick={handleSubmit}>Confirmar Reserva</ReservationButton>
          </Div>
        </ConfirmationBlock>

    </FormContainer>
  );
};

export default Form;
