import React, { useState, useEffect } from "react";
import {
  NavbarBody,
  NavbarBlock,
  Title,
  Form,
  SelectBox,
  OptionsContainer,
  PreSelected,
  Option,
  Label,
  Box,
  Button,
} from "./NavbarComponent";
import { ImLocation } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

const ciudades = [
  {
    city: "San Carlos de Bariloche",
    country: "Argentina",
  },
  {
    city: "Mendoza",
    country: "Argentina",
  },
  {
    city: "Cordoba",
    country: "Argentina",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({
    city: '',
    date: ''
  })

  const [dates, setDates] = useState({startDate: null, endDate: null});

  const handleInputChange = (event) => {
    console.log('funciona');
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <NavbarBody>
      <NavbarBlock>
        <Title>Busca ofertas en hoteles, casas y mucho mas</Title>
        <Form onSubmit={handleSubmit}>
          <SelectBox>
            <OptionsContainer className={active ? "active" : ""}>
              {ciudades.map((item, index) => (
                <Option key={index}>
                  <input
                    className="radio"
                    type="radio"
                    id={item.city}
                    name="city"
                    onChange={handleInputChange}
                    value={item.city}
                    onClick={() => setActive(!active)}
                  />
                  <Label htmlFor={item.city}>
                    <GoLocation />
                    <Box>
                      <span>{item.city}</span>
                      <small>{item.country}</small>
                    </Box>
                  </Label>
                  <hr />
                </Option>
              ))}
            </OptionsContainer>
            <PreSelected onClick={() => setActive(!active)}>
              <ImLocation />
              <span>{data.city === '' ? '¿A donde vamos?' : data.city}</span>
            </PreSelected>
          </SelectBox>
          <div style={{width: '422px'}}> 
          {/* <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={dates.startDate}
          endDate={dates.endDate}
          onDatesChange={({ startDate, endDate }) => { setDates(startDate, endDate)}}
          // focusedInput={this.state.focusedInput}
          // onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        /> */}
          </div>
          <Button type="submit">Buscar</Button>
        </Form>
      </NavbarBlock>
    </NavbarBody>
  );
};

export default Navbar;
