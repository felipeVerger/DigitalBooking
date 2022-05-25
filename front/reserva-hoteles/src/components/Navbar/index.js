import React, { useState, useEffect } from "react";
import {
  NavbarBody,
  NavbarBlock,
  Title,
  Form,
  Button,
  CalendarContainer,
  Dropdown,
  CalendarIcon
} from "./NavbarComponent";
import { ImLocation } from "react-icons/im";
import { GoLocation } from "react-icons/go";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import "react-dropdown/style.css";

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
  const [data, setData] = useState({
    city: "",
    date: "",
  });

  const handleDateSelect = (ranges) => {
    setData({ ...data, date: ranges.selection });
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const handleCityChange = (city) => {
    setData({
      ...data,
      city: city.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [calendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendarOpen = () => {
    setCalendarOpen(!calendarOpen);
  }

  return (
    <NavbarBody>
      <NavbarBlock>
        <Title>Busca ofertas en hoteles, casas y mucho mas</Title>
        <Form onSubmit={handleSubmit}>
          <Dropdown
            options={ciudades.map((item) => ({
              value: item.city.toLowerCase(),
              label: item.city,
            }))}
            placeholder={"¿A donde vamos?"}
            onChange={handleCityChange}
          />
          <CalendarContainer onClick={() => setCalendarOpen(true)} isCalendarOpen={calendarOpen}>
            {calendarOpen ? (
              <DateRange
                locale={es}
                ranges={[selectionRange]}
                onChange={handleDateSelect}
              />
            ) : (
              <>
                <CalendarIcon />
                <div>Check In - Check Out</div>
              </>
            )}
          </CalendarContainer>
          <Button type="submit">Buscar</Button>
        </Form>
      </NavbarBlock>
    </NavbarBody>
  );
};

export default Navbar;
