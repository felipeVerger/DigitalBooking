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
  DatePickerBox,
} from "./NavbarComponent";
import { ImLocation } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

import { DateRange } from "react-date-range";

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

  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  const handleToggle = () => {
    setActive(!active);
  };

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

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
            <PreSelected onClick={() => handleToggle()}>
              <ImLocation />
              <span>¿A donde vamos?</span>
            </PreSelected>
          </SelectBox>
          {/* <DatePickerBox>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={range}
              />
            </DatePickerBox> */}
          <Button type="submit">Buscar</Button>
        </Form>
      </NavbarBlock>
    </NavbarBody>
  );
};

export default Navbar;
