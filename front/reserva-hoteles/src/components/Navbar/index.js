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

import './DatePicker.css'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'

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

  const startDate = new Date();
  const endDate = new Date();

  return (
    <NavbarBody>
      <NavbarBlock>
        <Title>Busca ofertas en hoteles, casas y mucho mas</Title>
        <Form>
          <SelectBox>
            <OptionsContainer className={active ? "active" : ""}>
              {ciudades.map((item, index) => (
                <Option key={index}>
                  <input
                    className="radio"
                    type="radio"
                    id={item.city}
                    name="city"
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
              <span>¿A donde vamos?</span>
            </PreSelected>
          </SelectBox>
          <div style={{width: '422px'}}>
            <DateRangePickerComponent
              placeholder="Check in - Check out"
              startDate={startDate}
              endDate={endDate}
            ></DateRangePickerComponent>
          </div>
          <Button type="submit">Buscar</Button>
        </Form>
      </NavbarBlock>
    </NavbarBody>
  );
};

export default Navbar;
